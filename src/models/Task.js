import { Timestamp } from "firebase/firestore";

const TaskConverter = {
  toFirestore: (t) => {
    return {
      title: t.title,
      description: t.description,
      dueDate: Timestamp.fromDate(t.dueDate),
      priority: t.priority,
      completeed: t.completed,
      projectId: t.projectId,
      uId: t.uId,
    };
  },
  fromFirestore: (snapShot, options) => {
    const data = snapShot.data(options);
    return {
      id: snapShot.id,
      title: data.title,
      dueDate: data.dueDate && data.dueDate.toDate(),
      description: data.description,
      priority: data.priority,
      completed: data.completed,
      projectId: data.projectId,
    };
  },
};

export { TaskConverter };
