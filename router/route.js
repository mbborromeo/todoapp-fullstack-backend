import { Router } from "express";

import * as controller from "../controllers/controller.js";

const router = Router();

/** Define API routes */

/* Get: Done (10 most recently completed items), To-Do (unlimited), alphabetically sorted 
   Search: live text on both To-Do and Done columns
   URL parameters: ?searchTerm=
*/
router.get("/todos/done", controller.getToDosDone);
router.get("/todos/incomplete", controller.getToDosIncomplete);

/* Add */
router.post("/todos", controller.addToDo);

/* Update: to Done or To-Do */
router.put("/todos", controller.updateToDo);

/* Delete: all To Dos (after user confirms) */
router.delete("/todos", controller.deleteToDos);

export default router;
