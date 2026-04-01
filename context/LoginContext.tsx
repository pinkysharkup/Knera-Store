"use client";

import { createContext, useContext, useState } from "react";

const LoginContext = createContext<any>(null);

export function LoginProvider({ children }: any) {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ openLogin, setOpenLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);