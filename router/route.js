import { Router } from "express";

import * as controller from "../controllers/controller.js";

const router = Router();

/** Define API routes */

/* Get: Done (10 most recently completed items), To-Do (unlimited), alphabetically sorted 
   Search: live text on both To-Do and Done columns
   URL parameters: ?searchTerm=
*/
router.get("/todos", controller.getToDos);
router.get("/todos/done", controller.getToDosDone);
router.get("/todos/incomplete", controller.getToDosIncomplete);
router.put("/todos/:id", controller.updateToDo);
router.route("/todos").post(controller.addToDo).delete(controller.deleteToDos);

export default router;
