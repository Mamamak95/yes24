import express, { urlencoded } from "express";
import * as controller from '../controller/controller.js'
const router = express();

router.use(express.json());
router.use(urlencoded());
router
  .get("/",controller.Rtbs);

export default router;
