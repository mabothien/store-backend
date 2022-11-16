import { Request, Response, NextFunction } from 'express';
import ProductOrderModel from '../models/productOrder';

const productOrderModel = new ProductOrderModel();

export const addProductToOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await productOrderModel.create(req.body)
    res.json({
      status: 'success',
      data: result,
      message: 'Product is added',
    });
  } catch (err) {
    next(err);
  }
};
