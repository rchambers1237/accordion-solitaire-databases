import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5371/api';

interface UserCredentials {
  email?: string;
  username?: string;
  password: string;
}

export const getUser = async (credentials: UserCredentials) => {
  console.log('User credentials in axios getUser:', credentials);
  try {
    const queryParams = new URLSearchParams(
      Object.entries(credentials)
        .filter(([_, value]) => value !== undefined) // Remove undefined values
        .map(([key, value]) => [key, String(value)]) // Ensure all values are strings
    ).toString();
    // const queryParams = new URLSearchParams(credentials as Record<string, string>).toString();
    const response = await axios.get(`${API_BASE_URL}/users?${queryParams}`);
    console.log("response in axios getUser:", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const createUser = async (userData: { name: string; email: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (userId: string, userData: { name?: string; email?: string }) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Don't think I'll need this, but copilot said it goes in a d.ts file (root?)
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }