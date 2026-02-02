export interface LoginCredentials {
  email: string;
  password: string;
}

// export interface RegisterCredentials {}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
}

export interface MeResponse {
  ok: boolean;
  user: User;
}

export interface AuthResponse {
  ok: boolean;
  data: {
    user: User;
    token: string;
  };
}
