const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");
const taskController = require("../controllers/taskController");


// ==================== AUTH ====================

router.post(
  "/login",
  authController.login
);

router.get(
  "/me",
  auth,
  authController.getProfile
);


// ==================== DEVELOPERS ====================

router.post(
  "/developers",
  auth,
  role("admin"),
  userController.createDeveloper
);

router.get(
  "/developers",
  auth,
  role("admin"),
  userController.getDevelopers
);

router.put(
  "/developers/:id",
  auth,
  role("admin"),
  userController.updateDeveloper
);

router.delete(
  "/developers/:id",
  auth,
  role("admin"),
  userController.deleteDeveloper
);


// ==================== PROJECTS ====================

router.post(
  "/projects",
  auth,
  role("admin"),
  projectController.createProject
);

router.get(
  "/projects",
  auth,
  role("admin"),
  projectController.getProjects
);

router.put(
  "/projects/:id",
  auth,
  role("admin"),
  projectController.updateProject
);

router.delete(
  "/projects/:id",
  auth,
  role("admin"),
  projectController.deleteProject
);

router.get(
  "/projects",
  auth,
  role("admin"),
  projectController.getProjects
);

// ==================== TASKS ====================

router.post(
  "/tasks",
  auth,
  role("admin"),
  taskController.createTask
);

router.get(
  "/tasks",
  auth,
  role("admin"),
  taskController.getTasks
);

router.put(
  "/tasks/:id",
  auth,
  role("admin"),
  taskController.updateTask
);

router.delete(
  "/tasks/:id",
  auth,
  role("admin"),
  taskController.deleteTask
);


// ==================== DEVELOPER TASKS ====================

router.get(
  "/my-tasks",
  auth,
  role("developer"),
  taskController.getMyTasks
);

router.put(
  "/tasks/:id/status",
  auth,
  role("developer"),
  taskController.updateTaskStatus
);

router.get(
  "/tasks",
  auth,
  role("admin"),
  taskController.getTasks
);

module.exports = router;