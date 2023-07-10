import ToDo_database from "../models/toDosSchema.js";

const sampleItem = {
  content: "new item",
  done: false,
};

/* Get all To Do's that are incomplete */
// Source: https://mongoosejs.com/docs/api/model.html#Model.find()
export async function getToDosIncomplete(req, res) {
  // searchTerm is ${req.query.searchTerm}

  try {
    // empty object {} specifies to find all documents
    const list = await ToDo_database.find({ done: false });
    res.json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Get 10 most recently completed items */
export async function getToDosDone(req, res) {
  // searchTerm is ${req.query.searchTerm}`

  try {
    const list = await ToDo_database.find({ done: true })
      .sort({ createdAt: "descending" })
      .limit(10);
    res.json(list);
  } catch (error) {
    res.json({ error });
  }
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
