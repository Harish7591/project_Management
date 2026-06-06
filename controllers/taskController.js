const Task = require("../models/Task");
const Project = require("../models/Project");
const User = require("../models/User");


// CREATE TASK
exports.createTask = async (req, res) => {
  try {

    const {
      title,
      description,
      projectId,
      assignedDeveloper,
      priority,
      dueDate
    } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    const developer = await User.findOne({
      _id: assignedDeveloper,
      role: "developer"
    });

    if (!developer) {
      return res.status(404).json({
        success: false,
        message: "Developer not found"
      });
    }

    const task = await Task.create({
      title,
      description,
      projectId,
      assignedDeveloper,
      priority,
      dueDate
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// GET ALL TASKS (ADMIN)
exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find()
      .populate("projectId", "projectName")
      .populate("assignedDeveloper", "name email");

    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    await Task.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// DEVELOPER MY TASKS
exports.getMyTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      assignedDeveloper: req.user.id
    })
      .populate("projectId", "projectName");

    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};



// UPDATE TASK STATUS
exports.updateTaskStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const task = await Task.findOne({
      _id: req.params.id,
      assignedDeveloper: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    task.status = status;

    await task.save();

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: task
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find()
      .populate("projectId", "projectName")
      .populate("assignedDeveloper", "name email");

    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};