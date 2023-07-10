import ToDo_database from "../models/toDosSchema.js";

const sampleItem = {
  content: "sample",
  done: false,
};

/* Get all To Do's */
export async function getToDosIncomplete(req, res) {
  // searchTerm is ${req.query.searchTerm}

  try {
    // find all elements inside To Do's collection
    const list = await ToDo_database.find();
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
  try {
    // ToDo_database.insertMany({ sampleItem }).then(
    //   res.json({ msg: "Data posted successfully!" })
    // );

    // Source: https://mongoosejs.com/docs/api/model.html#Model.create()
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
export async function deleteToDos(req, res) {
  // res.json("To Dos API delete all - DELETE request");

  // Source: https://www.mongodb.com/docs/manual/reference/method/db.collection.remove/
  // Not working:
  try {
    const result = await ToDo_database.remove({});
    res.json(result);

    // if (result) {
    //   // .then(res.json({ msg: "Data collection deleted successfully!" }))
    //   res.json({ msg: "Data collection deleted successfully!" });
    // } else {
    //   res.json("Error on deleting");
    // }
  } catch (error) {
    res.json({ error });
  }
}
