const Project = require("../models/Project");


// CREATE PROJECT
exports.createProject = async (req, res) => {
  try {

    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// GET PROJECTS
exports.getProjects = async (req, res) => {
  try {

    const projects = await Project.find();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// UPDATE PROJECT
exports.updateProject = async (req, res) => {
  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// DELETE PROJECT
exports.deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getProjects = async (req, res) => {
  try {

    const projects = await Project.find();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};