import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userModel = new UserModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await userModel.create(req.body);
    res.json({
      status: 200,
      data: { ...user },
      message: 'Product created successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.index();
    res.json({
      status: 200,
      data: user,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id as string);
    res.json({
      status: 200,
      data: user,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const updateById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.update(req.body);
    res.json({
      status: 'success',
      data: user,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.delete(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: user,
      message: 'Successfully'
    });
  } catch (err) {
    next(err);
  }
};
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.authenticate(username, password);
    const token = jwt.sign(
      { user },
      process.env.TOKEN_SECRET_KEY as unknown as string,
    );
    if (user) {
      return res.json({
        status: 200,
        data: { ...user, token },
        message: 'user authenticated successfully',
      });
    } else {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid Credentials',
      });
    }
  } catch (err) {
    return next(err);
  }
};
