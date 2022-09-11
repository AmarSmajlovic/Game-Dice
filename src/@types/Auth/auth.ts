import React from 'react'

export interface User {
  name: string
  username: string
  email: string
}

export interface AuthContextType {
  user?: User
  login: () => void;
  logout: () => void
}

export interface AuthContextProvierProps {
  children: React.ReactNode
}
