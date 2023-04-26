import {
  createContext,
  useMemo,
  useState,
} from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ token: '', name: '' });

  const value = useMemo(() => ({ auth, setAuth }));
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
