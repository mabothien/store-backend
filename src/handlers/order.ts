import { Request, Response, NextFunction } from 'express';
import OrderModel from '../models/order';

const orderModel = new OrderModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { status, quantity, orderId, productId } = req.body;
    const order = await orderModel.create(status, quantity, orderId, productId);
    res.json({
      status: 'success',
      data: { ...order },
      message: 'Order successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderModel.getAll();
    res.json({
      status: 'success',
      data: orders,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const order = await orderModel.getOrderById(parseInt(id));
    res.json({
      status: 'success',
      data: order,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};
