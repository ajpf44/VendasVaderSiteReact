import { createContext, useState, ReactNode, FC, useEffect } from "react";
import { login, createUser } from "../services/auth";
import { createUserAtFirebase, getUserByEmail } from "../services/users";
import UserType from "../types/UserType";

interface Session {
  user: UserType;
  token: string;
}

export interface SessionContextType {
  token: string | null;
  user: UserType | undefined;
  signin: (email: string, password: string) => Promise<string | undefined>;
  signup: (
    email: string,
    password: string,
    name: string
  ) => Promise<string | undefined>;
  logout: () => void;
  setToken: (token: string) => void;
  setUser: (user: UserType) => void;
  setStoragedSession: () => void;
}

// Criando o contexto com tipagem inicial
export const SessionContext = createContext<SessionContextType>({
  token: null,
  user: undefined,
  signin: async () => undefined,
  signup: async () => undefined,
  logout: () => {},
  setToken: () => {},
  setUser: () => {},
  setStoragedSession: () => {},
});

interface SessionContextProviderProps {
  children: ReactNode;
}

const SessionContextProvider: FC<SessionContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    setStoragedSession();
  }, []);

  const signin = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    const userToken = await login(email, password);

    if (userToken) {
      setToken(userToken);

      const firebaseUser = await getUserByEmail(email);
      setUser(firebaseUser);

      const sessionInfoJSON = JSON.stringify({
        user: firebaseUser,
        token: userToken,
      });
      sessionStorage.setItem("sessionInfo", sessionInfoJSON);
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
        address: "",
        cart: undefined,
      };

      await createUserAtFirebase(newUser);
      const firebaseUser = await getUserByEmail(email);
      setUser(firebaseUser);

      const sessionInfoJSON = JSON.stringify({
        user: newUser,
        token: userToken,
      });
      sessionStorage.setItem("sessionInfo", sessionInfoJSON);
    }
    return userToken;
  };

  const logout = (): void => {
    setToken(null);
    setUser(undefined);

    sessionStorage.clear();
  };

  const setStoragedSession = async () => {
    const sessionJSON = sessionStorage.getItem("sessionInfo");
    if (sessionJSON === "" || !sessionJSON) return;

    const { user, token }: Session = JSON.parse(sessionJSON);
    setToken(token);
    setUser(user);
  };

  const value: SessionContextType = {
    token: token,
    user: user,
    signin: signin,
    signup: signup,
    logout: logout,
    setToken: setToken,
    setUser: setUser,
    setStoragedSession: setStoragedSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionContextProvider;
