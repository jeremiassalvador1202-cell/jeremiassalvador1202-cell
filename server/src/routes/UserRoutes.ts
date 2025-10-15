import { Router } from "express";
import { fetchUsers } from "../controllers/UserController";

const router = Router();

router.get("/users", fetchUsers);

export default router; // ✅ default export