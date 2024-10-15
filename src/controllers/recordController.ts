import { Request, Response } from "express";
import Record from "../models/recordModel";

export const getExpense = async (req: Request, res: Response) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTotalBalance = async (req: Request, res: Response) => {
  try {
    const records = await Record.find();

    const totalBalance = records.reduce((acc, record) => {
      return record.type === "entrada"
        ? acc + record.amount
        : acc - record.amount;
    }, 0);

    res.json({ totalBalance });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTotalEntries = async (req: Request, res: Response) => {
  try {
    const entries = await Record.find({ type: "entrada" });

    const totalEntries = entries.reduce((acc, entry) => acc + entry.amount, 0);

    res.json({ totalEntries });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTotalExits = async (req: Request, res: Response) => {
  try {
    const exits = await Record.find({ type: "saída" });

    const totalExits = exits.reduce((acc, exit) => acc + exit.amount, 0);

    res.json({ totalExits });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const postExpense = async (req: Request, res: Response) => {
  try {
    const newRecord = new Record(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const putExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedRecord) {
      return res.status(404).json({ error: "Registro não encontrado" });
    }
    return res.json(updatedRecord);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRecord = await Record.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ error: "Registro não encontrado" });
    }
    return res.json({ message: "Registro deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};
