import express from "express";
import expenseRoutes from "./api-v1/expenseRoutes";

const router = express.Router();

router.use("/record", expenseRoutes);

export default router;
