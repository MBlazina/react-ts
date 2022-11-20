import { createContext, useState } from "react";

export const LoginContext = createContext<boolean>(true);
type LoginContextProviderProps = {
  children: React.ReactNode
}

const LoginContextProvider = ({ children }: LoginContextProviderProps) => {

  const [userDetails, setUserDetails] = useState(true)
  return (
    <LoginContext.Provider value={userDetails}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider