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

router
  .route("/todos")
  .post(controller.addToDo)
  .put(controller.updateToDo)
  .delete(controller.deleteToDos);

export default router;