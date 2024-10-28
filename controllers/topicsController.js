import Topic from"../models/Topic.js"

const createTopic = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTopic = await Topic.create({ title, description });
        res.status(201).json({ message: "Topic Created", topic: newTopic });
    } catch (error) {
        console.error("Error creating topic:", error);
        res.status(500).json({ error: "Failed to create Topic" });
    }
};

const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.json({ topics });
    } catch (error) {
        console.error("Error fetching topics:", error);
        res.status(500).json({ error: "Failed to fetch topics" });
    }
};

const deleteTopic = async (req, res) => {
    try {
        const { id } = req.params;
        await Topic.findByIdAndDelete(id);
        res.json({ message: "Topic Deleted" });
    } catch (error) {
        console.error("Error deleting topic:", error);
        res.status(500).json({ error: "Failed to delete topic" });
    }
};

const getTopicById = async (req, res) => {
    try {
        const { id } = req.params;
        const topic = await Topic.findById(id);
        if (!topic) {
            return res.status(404).json({ error: "Topic not found" });
        }
        res.json({ topic });
    } catch (error) {
        console.error("Error fetching topic:", error);
        res.status(500).json({ error: "Failed to fetch topic" });
    }
};

const updateTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!updatedTopic) {
            return res.status(404).json({ error: "Topic not found" });
        }
        res.json({ message: "Topic Updated", topic: updatedTopic });
    } catch (error) {
        console.error("Error updating topic:", error);
        res.status(500).json({ error: "Failed to update topic" });
    }
};

export { createTopic, getAllTopics, deleteTopic, getTopicById, updateTopic };
