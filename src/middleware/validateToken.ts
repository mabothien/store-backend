import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

type Error = {
  status?: number;
  name?: string;
  message?: string;
  stack?: string;
};

const handleUnauthorizedError = (next: NextFunction) => {
  const error: Error = new Error('Login Error, Please login again');
  error.status = 401;
  next(error);
};

const validateToken = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization');
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      if (token && bearer === 'bearer') {
        const decode = jwt.verify(
          token,
          process.env.TOKEN_SECRET_KEY as unknown as string,
        );
        if (decode) {
          next();
        } else {
          handleUnauthorizedError(next);
        }
      } else {
        // token type not bearer
        handleUnauthorizedError(next);
      }
    } else {
      // No Token Provided.
      handleUnauthorizedError(next);
    }
  } catch (err) {
    handleUnauthorizedError(next);
  }
};

export default validateToken;
