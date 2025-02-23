// shared.types.ts
export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: 'admin' | 'user' | 'viewer';
  }
  
  export interface ApiResponse<T> {
    data: T;
    meta?: {
      total: number;
      page: number;
      perPage: number;
    };
  }
  
  export interface ErrorResponse {
    message: string;
    code: string;
    details?: Record<string, unknown>;
  }