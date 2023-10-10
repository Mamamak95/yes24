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

const router = express.Router();

router.use(express.json());
router.use(urlencoded());
router
  .get("/", (req, res, next) => {
    ejs
      .renderFile("./template/list.ejs", { steadyseller })
      .then((data) => res.end(data));
  })
  .get("/1", (req, res, next) => {
    
  res.json(steadyseller);
  });

export default router;
