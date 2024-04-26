const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/", async (req, res) => {
    console.log("Find All Users");
    try {
      const result = await User.find();
      res.json({ rows: result });
    } catch (error) {
      res.status(404).json({ err: error });
    }
  });
 
  router.post("/", async (req, res) => {
    console.log("Create User Body", req.body);
    const newUser = new User(req.body);
    try {
      await newUser.save({});
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.sendStatus(204); 
    } catch (error) {
      res.status(500).json({ error: c.message });
    }
  });

  module.exports = router;