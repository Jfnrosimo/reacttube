import express from "express";

import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video.js";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.put("/:id", verifyToken, deleteVideo);
router.put("/find/:id", verifyToken, getVideo);

export default router;
