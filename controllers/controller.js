import ToDo_database from "../models/toDosSchema.js";

const sampleItem = {
  content: "Spandeau Ballet",
  done: true,
};

/* Get all To Do's that are incomplete */
// Source: https://mongoosejs.com/docs/api/model.html#Model.find()
// empty object {} argument specifies to find all documents
export async function getToDosIncomplete(req, res) {
  try {
    const list = await ToDo_database.find({
      done: false,
      ...(req.query.searchTerm && {
        content: { $regex: req.query.searchTerm, $options: "i" },
      }),
    });
    res.json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Get 10 most recently completed items */
export async function getToDosDone(req, res) {
  try {
    const list = await ToDo_database.find({
      done: true,
      ...(req.query.searchTerm && {
        content: { $regex: req.query.searchTerm, $options: "i" },
      }),
    })
      .sort({ createdAt: "descending" })
      .limit(10);
    res.json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Update a To Do */
// Source: https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
// https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
// checkout options.maxTimeMS
export async function updateToDo(req, res) {
  res.json(`API Update - PUT request. req.params.id: ${req.params.id}`);

  // get ID from URL
  const id = req.params.id ? req.params.id : false;

  if (id) {
    try {
      // check with Mongoose _id
      const doc = await ToDo_database.findById(id);
      console.log("doc is", doc);

      if (doc) {
        if (doc.done) {
          doc.done = false;
        } else {
          doc.done = true;
        }
        await doc.save();
      } else {
        console.log("no doc with that ID");
      }
    } catch (error) {
      res.json({ error });
    }
  } else {
    console.log("no ID provided in URL");
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
