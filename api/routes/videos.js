import express from "express";

import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  addView,
  deleteVideo,
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
router.get("/sub", getSub);

export default router;
