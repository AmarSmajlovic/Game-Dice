import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContextProvierProps,
  AuthContextType,
  User,
} from "../../@types/Auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProvierProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = () => {
    const user: User = {
      name: "Amar",
      username: "piki",
      email: "amar@gmail.com",
    };
    setUser(user);
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
