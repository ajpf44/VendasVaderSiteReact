import axios from 'axios';

// Replace with your actual Firebase project's API key
const API_KEY = "AIzaSyACurpnmpmOHDrXrfMyKliLzLMTDuEYmhA";

const URL_API = 'https://identitytoolkit.googleapis.com/v1/accounts:';

interface AuthData {
  email: string;
  password: string;
}

interface AuthResponse {
  idToken: string;
}

const authenticate = async (mode: string, data: AuthData): Promise<AuthResponse | undefined> => {
  try {
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, data);
    return response.data as AuthResponse;
  } catch (err) {
    console.error('Error during authentication:', err);
    return undefined; 
  }
};

export const createUser = async (email: string, password: string): Promise<string | undefined> => {
  const token = await authenticate('signUp', { email, password });
  return token?.idToken; 
};

export const login = async (email: string, password: string): Promise<string | undefined> => {
  const token = await authenticate('signInWithPassword', { email, password });
  return token?.idToken; 
};