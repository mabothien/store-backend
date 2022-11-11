import { Response, Request, NextFunction } from 'express';

const errorHandler = (
  error: { status: number; message: string },
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong!';
  res.status(status).json({ status, message });
};

export default errorHandler;
