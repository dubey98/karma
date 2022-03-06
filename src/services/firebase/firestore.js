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
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ProjectConverter } from "../../models/Project";
import { TaskConverter } from "../../models/Task";
import { defaultProjectDetails } from "./../../Constants/constants";

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
      ...defaultProjectDetails,
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

export {
  projectListener,
  getDefaultProjectId,
  getProject,
  createDefaultProject,
  taskListener,
  addTaskFS,
  deleteTaskFS,
  updateTaskFS,
  addUser,
  checkIfUserExists,
};

function _getTaskQuery(projectId, userId, options) {
  const startOfToday = new Date(new Date().setHours(0, 0, 0, 0));
  const endOfToday = new Date(addDays(new Date(), 1).setHours(0, 0, 0, 0));
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
      where("dueDate", ">", startOfToday),
      where("dueDate", "<", endOfToday),
      where("completed", "==", false),
      where("archived", "==", false)
    );
  } else if (options.getUpcoming) {
    q = query(
      collectionGroup(db, "tasks"),
      where("uId", "==", userId),
      where("dueDate", ">", endOfToday),
      where("completed", "==", false),
      where("archived", "==", false)
    );
  }
  return q.withConverter(TaskConverter);
}
