import express, { urlencoded } from "express";
import ejs from "ejs";

import {
  bestsellerList,
  realTimeBestsellerList,
  dayBestsellerList,
  monthBestsellerList,
  hotPriceBestsellerList,
  steadyseller
} from "../data.js"

const router = express();

router.use(express.json());
router.use(urlencoded());
router
  .get("/1", (req, res, next) => {
  res.json(realTimeBestsellerList);
  });

export default router;
