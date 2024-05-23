import { createContext, useState, ReactNode, FC } from "react";
import { login, createUser } from "../services/auth";
import { createUserAtFirebase, getUserByEmail } from "../services/users";

export interface SessionContextType {
  token: string | null;
  isAuthenticated: boolean;
  signin: (email: string, password: string) => Promise<string | undefined>;
  signup: (email: string, password: string, name: string) => Promise<string | undefined>;
  logout: () => void;
}

// Criando o contexto com tipagem inicial
export const SessionContext = createContext<SessionContextType>({
  token: null,
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

  const signin = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    const userToken = await login(email, password);

    const firebaseUser = await getUserByEmail(email);
    console.log("Usuário: " + firebaseUser)

    if (userToken) {
      setToken(userToken);
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
        email: email 
      }

      createUserAtFirebase(newUser)
    }
    return userToken;
  };

  const logout = (): void => {
    setToken(null);
  };

  const value: SessionContextType = {
    token: token,
    isAuthenticated: !!token,
    signin: signin,
    signup: signup,
    logout: logout,
  };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionContextProvider;
