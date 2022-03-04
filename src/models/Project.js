class Project {
  constructor(id, title, createdAt, description) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.description = description;
  }
}

const ProjectConverter = {
  toFirestore: (p) => {
    return {
      title: p.title,
      description: p.description,
      createdAt: p.createdAt,
    };
  },
  fromFirestore: (snapShot, options) => {
    const data = snapShot.data(options);
    return new Project(
      snapShot.id,
      data.title,
      data.createdAt,
      data.description
    );
  },
};

export { Project, ProjectConverter };
