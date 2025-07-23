import { useState, useEffect, useCallback } from 'react';
import type { User, LoginCredentials, RegisterCredentials, AuthState } from '../types';
import { apiClient } from '../utils/api';

const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: true,
    });

    // Initialize auth state from localStorage
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            try {
                const parsedUser = JSON.parse(user);
                setAuthState({
                    user: parsedUser,
                    token,
                    isAuthenticated: true,
                    isLoading: false,
                });
            } catch {
                // Invalid stored data, clear it
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setAuthState({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                    isLoading: false,
                });
            }
        } else {
            setAuthState(prev => ({ ...prev, isLoading: false }));
        }
    }, []);

    const login = useCallback(async (credentials: LoginCredentials) => {
        try {
            setAuthState(prev => ({ ...prev, isLoading: true }));

            const response = await apiClient.post<{ user: User; token: string }>('/auth/login', credentials as unknown as Record<string, unknown>);

            const { user, token } = response.data.data;

            // Store in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setAuthState({
                user,
                token,
                isAuthenticated: true,
                isLoading: false,
            });

            return { success: true };
        } catch (error: unknown) {
            setAuthState(prev => ({ ...prev, isLoading: false }));
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            return {
                success: false,
                error: errorMessage,
            };
        }
    }, []);

    const register = useCallback(async (credentials: RegisterCredentials) => {
        try {
            setAuthState(prev => ({ ...prev, isLoading: true }));

            const response = await apiClient.post<{ user: User; token: string }>('/auth/register', credentials as unknown as Record<string, unknown>);

            const { user, token } = response.data.data;

            // Store in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setAuthState({
                user,
                token,
                isAuthenticated: true,
                isLoading: false,
            });

            return { success: true };
        } catch (error: unknown) {
            setAuthState(prev => ({ ...prev, isLoading: false }));
            const errorMessage = error instanceof Error ? error.message : 'Registration failed';
            return {
                success: false,
                error: errorMessage,
            };
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setAuthState({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
        });
    }, []);

    const updateUser = useCallback((user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState(prev => ({ ...prev, user }));
    }, []);

    return {
        ...authState,
        login,
        register,
        logout,
        updateUser,
    };
};

export default useAuth; 