import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/user";

const router = express.Router();

//Update user
router.put("/:id", updateUser);

//Delete user
router.delete("/:id", deleteUser);

//Get user
router.get("/find/:id", getUser);

//Subscribe a user
router.put("/sub/:id", subscribe);

//Unsubscribe a user
router.put("/unsub/:id", unsubscribe);

//Like a video
router.put("/like/:videoId", like);

//Dislike a video
router.put("/dislike/:videoId", dislike);

export default router;
