import express, { Application } from "express";

import {
  getExpense,
  postExpense,
  putExpense,
  deleteExpense,
  getTotalEntries,
  getTotalExits,
  getTotalBalance,
} from "../../controllers/recordController";

const router = express.Router();

router.get("/expense", getExpense);
router.get("/total", getTotalBalance);
router.get("/entries", getTotalEntries);
router.get("/exits", getTotalExits);
router.post("/expense", postExpense);
router.put("/expense/:id", putExpense as any);
router.delete("/expense/:id", deleteExpense as any);

export default router;
