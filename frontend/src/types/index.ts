// User types
export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

// Auth types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

// Form types
export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'textarea';
    required?: boolean;
    placeholder?: string;
    validation?: {
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
    };
} 