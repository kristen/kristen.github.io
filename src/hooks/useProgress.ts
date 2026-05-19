import { useState, useCallback, useMemo } from 'react';
import type { Item } from '../types';

function getChIds(items: Item[]): string[] {
  return items.flatMap(i => {
    if (i.type === 'ch') return [i.id];
    if (i.type === 'pair') return i.pair.map(p => p.id);
    return [];
  });
}

function loadDone(storageKey: string): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch {
    return {};
  }
}

export function useProgress(storageKey: string, items: Item[]) {
  const [done, setDone] = useState<Record<string, boolean>>(() => loadDone(storageKey));

  const toggle = useCallback((key: string) => {
    setDone(prev => {
      const next = { ...prev, [key]: !prev[key] };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [storageKey]);

  const chIds = useMemo(() => getChIds(items), [items]);
  const completedCount = useMemo(() => chIds.filter(id => done[id]).length, [chIds, done]);
  const totalCount = chIds.length;

  return { done, toggle, completedCount, totalCount };
}
