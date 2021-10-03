import React, { createContext, useContext, useState } from "react";
import * as firebase from "./firebase";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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

  const auth = getAuth();

  onAuthStateChanged(auth, (_user) => {
    if (_user) {
      setUser(_user);
    } else {
      setUser(null);
    }
  });

  async function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const _user = result.user;
        setUser(_user);
        await _setUpFIrstTimeUser(_user.uid);

        console.log({ credential, token, _user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log("signing in", {
          errorCode,
          errorMessage,
          email,
          credential,
        });
      });
  }

  async function signOut() {
    await auth.signOut();
    setUser(null);
  }

  async function _setUpFIrstTimeUser(userId) {
    const userExists = await firebase.checkIfUserExists(userId);
    if (!userExists) {
      const user = auth.currentUser;
      await firebase.addUser(user);
      await firebase.createDefaultProject(user.uid);
    }
  }

  return {
    user,
    signIn,
    signOut,
  };
}
