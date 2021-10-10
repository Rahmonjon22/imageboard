import PostMessage from "../models/postMessage.js";

export  const getPosts = async(req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error });        
    }
};

export  const createPosts = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new PostMessage(post)
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({ message: error }); 
    }
};

