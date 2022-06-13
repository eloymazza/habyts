import React, {
  useMemo,
  ReactNode,
  useContext
} from 'react';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../config/firebase.config';

interface AuthorizationContext {
  signup: (email: string, password: string) => Promise<UserCredential>;
}

const defaultValue = {
  signup: () => new Promise<UserCredential>(Promise.resolve)
};

const AuthContext = React.createContext<AuthorizationContext>(defaultValue);

export const useAuth = () => useContext(AuthContext);

interface Props {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {

  const signup = (email: string, password: string) => (
    createUserWithEmailAndPassword(auth, email, password)
  );

  const contextObject = useMemo(() => ({
    signup
  }), []);

  return (
    <AuthContext.Provider
      value={contextObject}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
