import { Router } from "express";

const router = Router();

/** Define API routes */

/* Get: Done (10 most recently completed items), To-Do (unlimited), alphabetically sorted */
router.get("/todos", (req, res) => {
  res.json("To Dos API - GET request");
});

/* Add */

/* Delete: all To Dos (after user confirms) */

/* Update: to Done or To-Do */

/* Search: live text on both To-Do and Done columns */

export default router;
