import { Request, Response } from 'express';
import { User } from '../models/sql/User.model';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.findAll();
  console.log("users");
  res.json(users);
};

export const saveUser = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const updateUser = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const deleteUser = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const loginUser = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const forgotPassword = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const resetPassword = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const verifyToken = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};

export const sendVerificationEmail = async (_req: Request, res: Response) => {

  res.json("{result: " + JSON.stringify)
};
