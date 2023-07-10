import { toDos } from "../models/toDosSchema.js";

const sampleList = [
  {
    id: 1,
    content: "Uno",
    done: false,
  },
  {
    id: 2,
    content: "Dos",
    done: true,
  },
];

/* Get all To Do's */
export async function getToDosIncomplete(req, res) {
  // res.json(
  //   `To Dos API get Incomplete all - GET request: searchTerm is ${req.query.searchTerm}`
  // );

  try {
    // find all elements inside To Do's collection
    const list = await toDos.find();
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
export async function addToDo(req, res) {
  // res.json("To Dos API add - POST request");

  try {
    toDos
      .insertMany({ list: sampleList })
      .then(res.json({ msg: "Data saved successfully!" }));
  } catch (error) {
    res.json({ error });
  }
}

/* Update a To Do */
export async function updateToDo(req, res) {
  res.json("To Dos API update - PUT request");
}

/* Delete all To Do's */
export async function deleteToDos(req, res) {
  res.json("To Dos API delete all - DELETE request");
}
