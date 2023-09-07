import { Router } from "express";
import authRouter from "./authRouter";
import postRouter from "./postRouter";

const router = Router();

router.use('/auth',authRouter);
router.use('/',postRouter);

export default router