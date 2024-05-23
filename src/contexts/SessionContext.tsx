import { createContext, useState, ReactNode, FC } from "react";
import { login, createUser } from "../services/auth";
import { createUserAtFirebase, getUserByEmail } from "../services/users";

import UserType from "../types/UserType";

export interface SessionContextType {
  token: string | null;
  user: UserType | undefined;
  isAuthenticated: boolean;
  signin: (email: string, password: string) => Promise<string | undefined>;
  signup: (email: string, password: string, name: string) => Promise<string | undefined>;
  logout: () => void;
}

// Criando o contexto com tipagem inicial
export const SessionContext = createContext<SessionContextType>({
  token: null,
  user: undefined,
  isAuthenticated: false,
  signin: async () => undefined,
  signup: async () => undefined,
  logout: () => {},
});

interface SessionContextProviderProps {
  children: ReactNode;
}

const SessionContextProvider: FC<SessionContextProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType>();

  const signin = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    const userToken = await login(email, password);

    
    if (userToken) {
      setToken(userToken);

      const firebaseUser = await getUserByEmail(email);
      setUser(firebaseUser);
    }
    return userToken;
  };

  const signup = async (
    email: string,
    password: string,
    name: string
  ): Promise<string | undefined> => {
    const userToken = await createUser(email, password);
    if (userToken) {
      setToken(userToken);
      
      const newUser: UserType = {
        name: name,
        email: email,
        adress: "",
        cart: undefined  
      }
      
      createUserAtFirebase(newUser)
      setUser(newUser);
    }
    return userToken;
  };

  const logout = (): void => {
    setToken(null);
  };

  const value: SessionContextType = {
    token: token,
    user: user,
    isAuthenticated: !!token,
    signin: signin,
    signup: signup,
    logout: logout,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionContextProvider;
