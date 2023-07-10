import ToDo_database from "../models/toDosSchema.js";

const sampleItem = {
  content: "sample",
  done: false,
};

/* Get all To Do's */
// Source: https://mongoosejs.com/docs/api/model.html#Model.find()
export async function getToDosIncomplete(req, res) {
  // searchTerm is ${req.query.searchTerm}

  try {
    // empty object {} specifies to find all documents
    const list = await ToDo_database.find({});
    res.json(list);
  } catch (error) {
    res.json({ error });
  }
}

export async function getToDosDone(req, res) {
  res.json(
    `To Dos API get Done latest 10 items - GET request: searchTerm is ${req.query.searchTerm}`
  );
}

/* Add/Insert a To Do */
// Source: https://mongoosejs.com/docs/api/model.html#Model.create()
export async function addToDo(req, res) {
  try {
    await ToDo_database.create(sampleItem);
    res.json({ msg: "Data posted successfully!" });
  } catch (error) {
    res.json({ error });
  }
}

/* Update a To Do */
export async function updateToDo(req, res) {
  // need to get req.params.id
  res.json("To Dos API update - PUT request");
}

/* Delete all To Do's */
// Source: https://mongoosejs.com/docs/api/model.html#Model.deleteMany()
export async function deleteToDos(req, res) {
  try {
    // {} empty object specifies to delete all
    const result = await ToDo_database.deleteMany({});
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}
