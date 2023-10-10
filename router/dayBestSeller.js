import express, { urlencoded } from "express";
import ejs from "ejs";
// import { bookList } from "../data.js";
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
      .renderFile("./template/list.ejs", { dayBestsellerList })
      .then((data) => res.end(data));
  })
  .get("/:page", (req, res, next) => {
  res.json(dayBestsellerList);
  });

export default router;
