import { Request, Response } from 'express';
import { Task } from '../models/mongo/Task.model';

/**
 * @param { Request }
 * @param { Response }
 * @description Maneja las peticiones GET para obtener todas las tareas.
*/
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas', error });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea', error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.status(200).json(deletedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
};

