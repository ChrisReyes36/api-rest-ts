import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middlewares/file";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
