import React, {createContext, useContext, useState} from 'react';

type AuthContextType = {
  data: any;
  setData: any;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [data, setData] = useState();
  return (
    <AuthContext.Provider
      value={{
        data,
        setData,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
