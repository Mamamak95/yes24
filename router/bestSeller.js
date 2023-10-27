import express, { urlencoded } from "express";
import * as controller from '../controller/controller.js';


const router = express.Router();

router.use(express.json());
router.use(urlencoded());
router
  .get("/", controller.getBs)


export default router;
