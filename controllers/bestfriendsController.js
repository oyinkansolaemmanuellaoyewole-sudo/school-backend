import { Bestfriends } from "../models/bestfriends.js";



export const createBestfriends = async (req, res) => {
  try {
    const { name, age, subject } = req.body;

    const bestfriend = await Bestfriends.create({
      name,
      age,
      subject
    });
    console.log("Bestfriend created:", bestfriend);
        res.status(200).json({
          message: "Bestfriends fetched successfully",
          bestfriends,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }


 
};


 export const getBestfriends = async (req, res) => {
    try {
      const { name, age, subject } = req.query;
  
      // Build filter object dynamically
      const filter = {};
  
      if (name) {
        filter.name = { $regex: name, $options: "i" }; // case-insensitive search
      }
  
      if (age) {
        filter.age = age;
      }
  
      if (subject) {
        filter.subject = { $regex: subject, $options: "i" };
      }
  
  
      const bestfriends = await Bestfriends.find(filter);
  
      res.status(200).json({
        message: "Bestfriends fetched successfully",
        bestfriends
        
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  export const editBestfriends = async (req, res) => {
    try {
      const { name, age, id, subject} = req.body;
  
      const bestfriends = await Bestfriends.findByIdAndUpdate(id, { name, age, subject }, { new: true });
  
      if (!bestfriends) {
        return res.status(404).json({ message: "Bestfriends not found" });
      }
  
      res.status(200).json({
        message: " Bestfriends updated successfully",
        bestfriends
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const deleteBestfriends = async (req, res) => {  
   const { id } = req.body;
    try {
      const bestfriends = await Bestfriends.findByIdAndDelete(id);
  
      if (!bestfriends) {
        return res.status(404).json({ message: "Bestfriends is not found" });
      }
  
      res.status(200).json({
        message: "Bestfriends deleted successfully",
        bestfriends
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
