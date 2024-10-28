import express from "express"
import { createTopic, getAllTopics, deleteTopic, getTopicById, updateTopic } from "../controllers/topicsController.js"

const router = express.Router();

router.post("/", createTopic);
router.get("/", getAllTopics);
router.get("/:id", getTopicById);
router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);

export default router;
