import express from "express";

import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
  getBySearch,
  getByTag,
  getRandom,
  getSub,
  getTrend,
  getVideo,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

//Create a video routes
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", verifyToken, getVideo);
router.put("/view/:id", addView);
router.get("/random", getRandom);
router.get("/trend", getTrend);
router.get("/sub", verifyToken, getSub); //Get videos from subbed channel
router.get("/tags", getByTag);
router.get("/search", getBySearch);

export default router;
