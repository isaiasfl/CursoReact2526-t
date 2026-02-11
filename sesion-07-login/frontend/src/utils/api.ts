import type { AuthResponse, CreateUserPayload, MeResponse, UserResponse, UsersResponse } from "../types/auth.types";

const API_URL = "http://localhost:3001/api";

export async function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
}

// export async function register()
export async function register(email:string,password:string,name:string):Promise<AuthResponse> {
  const res= await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }
  return res.json();
} 
// getMe

export async function getMe(token: string): Promise<MeResponse> {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
}


export async function getUsers(token:string):Promise<UsersResponse> {
  const response = await fetch(`${API_URL}/users`, {
    
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

// getUserById (solo admin)
export async function getUserById(token: string, id: number): Promise<UserResponse> {
  const response = await fetch(`${API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}

// createUser (solo admin)
export async function createUser(token: string, data: CreateUserPayload): Promise<UserResponse> {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
}

// deleteUser
export async function deleteUser(token:string,id: number):Promise<void> {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
}