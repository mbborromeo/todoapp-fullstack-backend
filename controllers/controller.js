import ToDo_database from "../models/toDosSchema.js";

/* Get all To Do's that are incomplete */
// Source: https://mongoosejs.com/docs/api/model.html#Model.find()
// empty object {} argument specifies to find all documents
export async function getToDosIncomplete(req, res) {
  try {
    const list = await ToDo_database.find({
      doneAt: null,
      ...(req.query.searchTerm && {
        content: { $regex: req.query.searchTerm, $options: "i" },
      }),
    });
    // .sort({ content: "ascending" }); // puts uppercase values in front
    list.sort((a, b) => a.content.localeCompare(b.content)); // case-insensitive sort
    return res.status(200).json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Get 10 most recently completed items */
export async function getToDosDone(req, res) {
  try {
    const list = await ToDo_database.find({
      doneAt: { $ne: null },
      ...(req.query.searchTerm && {
        content: { $regex: req.query.searchTerm, $options: "i" },
      }),
    })
      .sort({ doneAt: "descending" })
      .limit(10);
    list.sort((a, b) => a.content.localeCompare(b.content));
    return res.status(200).json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Update a To Do */
// Source: https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
// https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
// checkout options.maxTimeMS
export async function updateToDoDone(req, res) {
  // get ID from URL
  const id = req.params.id;
  const filter = { _id: id };
  const update = { doneAt: Date.now() };
  const options = {
    returnOriginal: false, // new: true,
  };

  try {
    // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    const doc = await ToDo_database.findOneAndUpdate(filter, update, options);
    console.log("----- doc returned is:", doc);

    if (!doc) {
      return res.status(404).json({ error: "error - no To Do with that ID" });
    }

    // status() returns a status code: https://www.geeksforgeeks.org/express-js-res-status-function/
    // seems to need status() and json() for res body
    return res.status(200).json(doc); // don't seem to need a return value.  What is a ServerResponse anyway?
  } catch (error) {
    return res.status(500).json({ error: "Server error" }); // msg: "Server error"
  }
}

export async function updateToDoIncomplete(req, res) {
  // get ID from URL
  const id = req.params.id;
  const filter = { _id: id };
  const update = { doneAt: null };
  const options = {
    returnOriginal: false,
  };

  try {
    // check with Mongoose _id
    const doc = await ToDo_database.findOneAndUpdate(filter, update, options);

    // Q - Do I still need to check for doc.doneAt value,
    // since my front-end is handling whether to call updateToDoDone or updateToDoIncomplete
    // based on whether the checkbox is checked or not?
    // if (doc.doneAt) {
    //   doc.doneAt = null;
    //   await doc.save();
    // }
    // If I still need this check, shall I add a filter condition to check if doneAt is not null?

    if (!doc) {
      return res.status(404).json({ error: "error - no To Do with that ID" });
    }

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(500).json({ error: "Server error" }); // msg: "Server error"
  }
}

/* Add/Insert a To Do */
// Source: https://mongoosejs.com/docs/api/model.html#Model.create()
export async function addToDo(req, res) {
  try {
    const insertedDoc = await ToDo_database.create({
      content: req.query.task,
      doneAt: null,
    });
    return res.status(201).json(insertedDoc);
  } catch (error) {
    res.json({ error });
  }
}

/* Delete all To Do's */
// Source: https://mongoosejs.com/docs/api/model.html#Model.deleteMany()
export async function deleteToDos(req, res) {
  try {
    // {} empty object as argument specifies to delete all entries in DB
    const result = await ToDo_database.deleteMany({});
    return res.status(200).json(result);
  } catch (error) {
    res.json({ error });
  }
}
