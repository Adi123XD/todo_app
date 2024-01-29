import ErrorHandler from "../middlewares/error.js";
import Task from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, user: req.user });
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};
export const showTask = async (req, res, next) => {
  try {
    //   const { title, description } = req.body;
    const tasks = await Task.find({ user: req.user });
    res.status(201).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};
export const updateTask = async (req, res, next) => {
  try {
    //   const { title, description } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("task not found", 404));
    }
    await task.save();
    res.status(201).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    //   const { title, description } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("task not found", 404));
    }
    await task.deleteOne();
    res.status(201).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
