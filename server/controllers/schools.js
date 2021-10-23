import mongoose from "mongoose";
import PostSchool from "../models/postSchool.js";

export const getSchools = async (req, res) => {
  try {
    const postSchools = await PostSchool.find(); 
    console.log(postSchools);

    res.status(200).json(postSchools);
  }
  catch (error) {
    res.status(404).json({ message: error.message});

  }
  res.send('School getting');
}

export const createSchools = async (req, res) => {
  const post = req.body;

  const newSchool = new PostSchool(post);
  try {
    await newSchool.save();

    res.status(201).json(newSchool);
  }
  catch {
    res.status(409).json({ message: error.message })

  }
}


export const updateSchool = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  const updatedSchool = PostSchool.findbyIdAndUpdate(_id, post, { new: true });

  res.json(updatedSchool);
}