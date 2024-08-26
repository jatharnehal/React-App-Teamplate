import React, {useContext, useMemo, useState} from 'react';

const AuthContext = React.createContext();

export function AuthProvider({children}) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      token,
      user,
      setUser,
      setToken,
    }),
    [token, user, setUser, setToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
