import { useState, useCallback, useMemo, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import type { Item } from '../types';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { getChIds, mergeProgress } from '../utils/progressUtils.js';

function loadLocal(storageKey: string): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch {
    return {};
  }
}

function saveLocal(storageKey: string, done: Record<string, boolean>) {
  try { localStorage.setItem(storageKey, JSON.stringify(done)); } catch {}
}

async function loadFirestore(uid: string, storageKey: string): Promise<Record<string, boolean>> {
  if (!db) return {};
  try {
    const snap = await getDoc(doc(db, 'users', uid, 'progress', storageKey));
    return (snap.exists() ? snap.data().done : {}) as Record<string, boolean>;
  } catch {
    return {};
  }
}

async function saveFirestore(uid: string, storageKey: string, done: Record<string, boolean>) {
  if (!db) return;
  try {
    await setDoc(doc(db, 'users', uid, 'progress', storageKey), { done });
  } catch {}
}

export function useProgress(storageKey: string, items: Item[]) {
  const { user } = useAuth();
  const [done, setDone] = useState<Record<string, boolean>>(() => loadLocal(storageKey));

  // When user signs in, merge local progress with Firestore and save the union back to both
  useEffect(() => {
    if (!user) return;
    loadFirestore(user.uid, storageKey).then(remote => {
      setDone(prev => {
        const merged = mergeProgress(prev, remote);
        saveLocal(storageKey, merged);
        saveFirestore(user.uid, storageKey, merged);
        return merged;
      });
    });
  }, [user, storageKey]);

  const toggle = useCallback((key: string) => {
    setDone(prev => {
      const next = { ...prev, [key]: !prev[key] };
      saveLocal(storageKey, next);
      if (user) saveFirestore(user.uid, storageKey, next);
      return next;
    });
  }, [storageKey, user]);

  const chIds = useMemo(() => getChIds(items), [items]);
  const completedCount = useMemo(() => chIds.filter(id => done[id]).length, [chIds, done]);
  const totalCount = chIds.length;

  return { done, toggle, completedCount, totalCount };
}
