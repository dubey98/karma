import {
  collection,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
  doc,
} from "firebase/firestore";
import { ProjectConverter } from "../../models/Project";

const db = getFirestore();

const projectListener = (userId, setProjects) => {
  const q = query(
    collection(db, "projects"),
    where("uid", "==", userId || "")
  ).withConverter(ProjectConverter);
  const unsub = onSnapshot(q, (querySnapshot) => {
    const p = [];
    querySnapshot.forEach((doc) => {
      p.push(doc.data());
    });
    setProjects(p);
  });
  return unsub;
};

const getDefaultProjectId = async (userId) => {
  const docRef = doc(db, "users", userId);
  const user = await getDoc(docRef);
  let defaultProjectId = "";
  if (user.exists()) {
    defaultProjectId = user.data().defaultProjectId;
  } else {
    console.log("cannot retrive default project Id");
  }
  return defaultProjectId;
};

const getProject = async (projectId) => {
  const docRef = doc(db, "projects", projectId);
  const snap = await getDoc(docRef);
  let project = {};
  if (snap.exists()) {
    project = {
      ...snap.data(),
      id: snap.id,
    };
  } else {
    console.log("project not found", projectId);
  }
  return project;
};

export { projectListener, getDefaultProjectId, getProject };
