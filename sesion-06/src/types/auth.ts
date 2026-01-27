
export interface User {
  id: string
  email: string
  name: string
}


export inferface AuthUser {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface AuthActions {

}


export type AuthContextType = AuthUser & AuthActions