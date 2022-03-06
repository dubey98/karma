import { addDays } from "date-fns";
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
  deleteDoc,
  setDoc,
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

const taskListener = async (projectId, userId, setTasks, options) => {
  let q = _getTaskQuery(projectId, userId, options);
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

const deleteTaskFS = async (taskId, projectId) => {
  const taskRef = doc(db, "projects", projectId, "tasks", taskId);
  await deleteDoc(taskRef);
};

const updateTaskFS = async (task, newData) => {
  const taskRef = doc(db, "projects", task.projectId, "tasks", task.id);
  await setDoc(taskRef, newData, { merge: true });
};

export {
  projectListener,
  getDefaultProjectId,
  getProject,
  taskListener,
  addTaskFS,
  deleteTaskFS,
  updateTaskFS,
};

function _getTaskQuery(projectId, userId, options) {
  let q = query(
    collectionGroup(db, "tasks"),
    where("projectId", "==", projectId),
    where("uId", "==", userId),
    where("completed", "==", false),
    where("archived", "==", false)
  );
  if (options.getTodays) {
    q = query(
      collectionGroup(db, "tasks"),
      where("uId", "==", userId),
      where("dueDate", ">", new Date().setHours(0, 0, 0, 0)),
      where("dueDate", "<", addDays(new Date(), 1).setHours(0, 0, 0, 0)),
      where("completed", "==", false),
      where("archived", "==", false)
    );
  } else if (options.getUpcoming) {
    q = query(
      collectionGroup(db, "tasks"),
      where("uId", "==", userId),
      where("dueDate", ">", addDays(new Date(), 1).setHours(0, 0, 0, 0)),
      where("completed", "==", false),
      where("archived", "==", false)
    );
  }
  return q.withConverter(TaskConverter);
}
