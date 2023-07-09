/* Get all To Do's */
export async function getToDosDone(req, res) {
  res.json(
    `To Dos API get Done latest 10 items - GET request: searchTerm is ${req.query.searchTerm}`
  );
}

export async function getToDosIncomplete(req, res) {
  res.json(
    `To Dos API get Incomplete all - GET request: searchTerm is ${req.query.searchTerm}`
  );
}

/* Add/Insert a To Do */
export async function addToDo(req, res) {
  res.json("To Dos API add - POST request");
}

/* Update a To Do */
export async function updateToDo(req, res) {
  res.json("To Dos API update - PUT request");
}

/* Delete all To Do's */
export async function deleteToDos(req, res) {
  res.json("To Dos API delete all - DELETE request");
}
