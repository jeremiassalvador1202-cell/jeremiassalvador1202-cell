import Database from "../db";
import { RowDataPacket } from "mysql2";

const db = Database.getInstance();

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getAllUsers = (callback: (err: any, results?: User[]) => void) => {
  db.query<User[] & RowDataPacket[]>(
    "SELECT * FROM users",
    (err: any, results: User[] & RowDataPacket[]) => { // ✅ add types
      if (err) return callback(err);
      callback(null, results);
    }
  );
};