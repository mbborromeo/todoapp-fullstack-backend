import toDo_database from "../models/toDosSchema.js";

// Source: https://mongoosejs.com/docs/api/model.html#Model.find()
// empty object {} argument specifies to find all documents
export async function getToDosIncomplete(req, res) {
  try {
    const list = await toDo_database.find({
      doneAt: null,
      ...(req.query.searchTerm && {
        content: { $regex: req.query.searchTerm, $options: "i" },
      }),
    });
    // .sort({ content: "ascending" }); // puts uppercase values in front
    list.sort((a, b) => a.content.localeCompare(b.content)); // case-insensitive sort
    res.status(200).json(list);
  } catch (error) {
    res.json({ error });
  }
}

/* Get 10 most recently completed items */
export async function getToDosDone(req, res) {
  try {
    const list = await toDo_database
      .find({
        doneAt: { $ne: null },
        ...(req.query.searchTerm && {
          content: { $regex: req.query.searchTerm, $options: "i" },
        }),
      })
      .sort({ doneAt: "descending" })
      .limit(10);
    list.sort((a, b) => a.content.localeCompare(b.content));
    res.status(200).json(list);
  } catch (error) {
    res.json({ error });
  }
}

// Source: https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
// https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
// checkout options.maxTimeMS
export async function updateToDoDone(req, res) {
  // get ID from URL
  const id = req.params.id; // test incorrect ID: "123e2bab57c90c5a695d8ABC"
  const filter = { _id: id };
  const update = { doneAt: Date.now() };

  try {
    const result = await toDo_database.updateOne(filter, update);

    if (result.modifiedCount !== 1) {
      // https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
      // specify return to stop code continuing below
      return res.status(404).json({ error: "No To Do with that ID" });
    }

    // always include status() to return the HTTP status code: https://www.geeksforgeeks.org/express-js-res-status-function/
    // needs json() if sending res body, or send() if not sending body
    res.status(204).send();
  } catch (error) {
    console.log("catch error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function updateToDoIncomplete(req, res) {
  // get ID from URL
  const id = req.params.id;
  const filter = { _id: id };
  const update = { doneAt: null };

  try {
    const result = await toDo_database.updateOne(filter, update);

    if (result.modifiedCount !== 1) {
      return res.status(404).json({ error: "error - no To Do with that ID" });
    }

    res.status(204).send();
  } catch (error) {
    console.log("catch error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// Source: https://mongoosejs.com/docs/api/model.html#Model.create()
export async function addToDo(req, res) {
  try {
    const insertedDoc = await toDo_database.create({
      content: req.query.task,
      doneAt: null,
    });
    // status code 201: request succeeded, and a new resource was created as a result.
    // This is typically the response sent after POST requests:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.status(201).json(insertedDoc);
  } catch (error) {
    res.json({ error });
  }
}

/* Delete all To Do's */
// Source: https://mongoosejs.com/docs/api/model.html#Model.deleteMany()
export async function deleteToDos(req, res) {
  try {
    // {} empty object as argument specifies to delete all entries in DB
    await toDo_database.deleteMany({});

    // status code 204 means there is no body (content) in the response we're sending back
    res.status(204).send(); // just send status code without response body
  } catch (error) {
    res.json({ error });
  }
}

