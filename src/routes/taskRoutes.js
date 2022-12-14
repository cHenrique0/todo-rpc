const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const taskRouter = Router();

taskRouter.get("/list", TaskController.getAll);

taskRouter.get("/search", TaskController.filterTasks);

taskRouter.get("/create", TaskController.createTaskView);

taskRouter.post("/create", TaskController.createTask);

taskRouter.post("/delete/:id", TaskController.deleteTask);

taskRouter.post("/edit/:id", TaskController.updateTask);

taskRouter.get("/edit/:id", TaskController.updateTaskView);

taskRouter.post("/done/:id", TaskController.doneTask);

taskRouter.get("/:id", TaskController.getOne);

module.exports = taskRouter;
