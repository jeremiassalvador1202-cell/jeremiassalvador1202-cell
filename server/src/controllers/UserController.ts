import { Request, Response } from "express";
import { getAllUsers } from "../models/User";

export const fetchUsers = (req: Request, res: Response) => {
  getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: "Failed to fetch users" });
    res.json(users);
  });
};