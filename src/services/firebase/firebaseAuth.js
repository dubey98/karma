"use strict";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./../../config/firebase.config";
import { addUser, createDefaultProject, checkIfUserExists } from "./firestore";

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const _user = result.user;
      await _setUpFIrstTimeUser(_user.uid);
      console.log("user signed in successfully");
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
};

const firebaseSignOut = async () => {
  await auth.signOut();
};

const _setUpFIrstTimeUser = async (userId) => {
  const userExists = await checkIfUserExists(userId);
  if (!userExists) {
    const user = auth.currentUser;
    await addUser(user);
    await createDefaultProject(user.uid);
  }
};

export { signInWithGoogle, firebaseSignOut };
