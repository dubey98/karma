import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle, firebaseSignOut } from "./firebase/firebaseAuth";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthContextProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuthProvider() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser(_user);
      } else setUser(null);
    });
    return unsub;
  }, []);

  async function signIn() {
    await signInWithGoogle();
  }

  async function signOut() {
    await firebaseSignOut();
  }

  return {
    user,
    signIn,
    signOut,
  };
}
