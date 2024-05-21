import  { createContext, useState, ReactNode, FC } from 'react';
import { login } from '../services/auth';


export interface AuthContextType {  
    token: string | null;
    isAuthenticated: boolean;
    signin: (email: string, password: string) => Promise<string | undefined>;
    logout: () => void;
}

// Criando o contexto com tipagem inicial
export const AuthContext = createContext<AuthContextType>({
    token: null,
    isAuthenticated: false,
    signin: async () => undefined,
    logout: () => {},
});


interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    const signin = async (email: string, password: string): Promise<string | undefined> => {
        const userToken = await login(email, password);
        if (userToken) {
            setToken(userToken);
        }
        return userToken;
    }

    const logout = (): void => {
        setToken(null);
    }

    const value: AuthContextType = {
        token: token,
        isAuthenticated: !!token,
        signin: signin,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;