import { useEffect } from "react";
import { createContext, useState } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

//This is the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
      setCurrentUser(user)
    })
    return unsubscribe
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
