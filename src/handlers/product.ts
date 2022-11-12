import { Request, Response, NextFunction } from 'express';
import ProductModel from '../models/product';

const productModel = new ProductModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const order = await productModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...order },
      message: 'Product is created successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const index = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await productModel.index();
    res.json({
      status: 'success',
      data: orders,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const order = await productModel.show(id);
    res.json({
      status: 'success',
      data: order,
      message: 'Successfully',
    });
  } catch (err) {
    next(err);
  }
};
