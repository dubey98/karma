import {
  collection,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
  doc,
  collectionGroup,
  addDoc,
} from "firebase/firestore";
import { ProjectConverter } from "../../models/Project";
import { TaskConverter } from "../../models/Task";

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

const taskListener = async (projectId, userId, setTasks) => {
  const q = query(
    collectionGroup(db, "tasks"),
    where("projectId", "==", projectId),
    where("uId", "==", userId)
  ).withConverter(TaskConverter);
  const unsub = onSnapshot(q, (snapShot) => {
    const t = [];
    snapShot.forEach((doc) => {
      t.push(doc.data());
    });
    setTasks(t);
  });
  return unsub;
};

const addTaskFS = async (task, projectId) => {
  const taskRef = await addDoc(
    collection(db, "projects", projectId, "tasks"),
    task
  );
  console.log("task added with the id:", taskRef.id);
  return taskRef.id;
};

export {
  projectListener,
  getDefaultProjectId,
  getProject,
  taskListener,
  addTaskFS,
};
