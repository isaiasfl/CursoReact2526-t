export interface User {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt?: string;
}

export interface AuthResponse {
  ok: boolean;
  data: {
    user: User;
    token: string;
  };
}

export interface MeResponse {
  ok: boolean;
  user: User;
}

export interface UsersResponse {
  ok: boolean;
  data: User[];
}

export interface UserResponse {
  ok: boolean;
  data: User;
}

export interface CreateUserPayload {
  email: string;
  password: string;
  name: string;
  role?: "USER" | "ADMIN";
}
