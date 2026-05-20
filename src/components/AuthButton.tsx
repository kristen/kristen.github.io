import { useAuth } from '../context/AuthContext';

export function AuthButton() {
  const { user, loading, signIn, signOut } = useAuth();

  if (!import.meta.env.VITE_FIREBASE_API_KEY || loading) return null;

  if (user) {
    const initials = (user.displayName ?? user.email ?? '?')
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <div className="auth-user">
        <span className="auth-avatar" title={user.displayName ?? user.email ?? ''}>{initials}</span>
        <button className="auth-signout" onClick={signOut}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="auth-prompt">
      <span className="auth-prompt-label">Sign in to sync progress across devices</span>
      <button className="auth-btn" onClick={signIn}>Sign in with Google</button>
    </div>
  );
}
