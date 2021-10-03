import {
  getFirestore,
  collection,
  getDoc,
  query,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import * as gC from "./../Constants/constants";

const db = getFirestore();

async function checkIfUserExists(userId) {
  let result = false;
  if (userId !== "") {
    const q = query(doc(db, "users", userId));
    const snapShot = await getDoc(q);
    if (snapShot.exists()) {
      result = true;
    }
  }
  return result;
}

async function addUser(user) {
  if (user !== null) {
    const newUser = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    const uid = user.uid;

    const result = await setDoc(doc(db, "users", uid), {
      ...newUser,
    });
    console.log(result);
  }
}

async function createDefaultProject(userId) {
  if (userId !== null) {
    const _project = {
      ...gC.defaultProjectDetails,
      timestamp: serverTimestamp(),
      uid: userId,
    };
    const result = await addDoc(collection(db, "projects"), {
      ..._project,
    });
    await updateDoc(doc(db, "users", userId), {
      defaultProjectId: result.id,
    });
  }
}

export { checkIfUserExists, addUser, createDefaultProject };
