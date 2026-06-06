const User = require("../models/User");
const bcrypt = require("bcryptjs");


// CREATE DEVELOPERS
exports.createDeveloper = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const developer = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "developer"
    });

    res.status(201).json({
      success: true,
      message: "Developer created successfully",
      data: developer
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// GET DEVELOPERS
exports.getDevelopers = async (req, res) => {
  try {

    const developers = await User.find({
      role: "developer"
    }).select("-password");

    res.status(200).json({
      success: true,
      count: developers.length,
      data: developers
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// UPDATE DEVELOPER
exports.updateDeveloper = async (req, res) => {
  try {

    const { name, email } = req.body;

    const developer = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email
      },
      {
        new: true
      }
    ).select("-password");

    if (!developer) {
      return res.status(404).json({
        success: false,
        message: "Developer not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Developer updated successfully",
      data: developer
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// DELETE DEVELOPER
exports.deleteDeveloper = async (req, res) => {
  try {

    const developer = await User.findById(req.params.id);

    if (!developer) {
      return res.status(404).json({
        success: false,
        message: "Developer not found"
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Developer deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};