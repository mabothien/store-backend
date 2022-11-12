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

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const bearer = authHeader.split(' ')[0].toLowerCase();
      if (token && bearer === 'bearer') {
        jwt.verify(
          token,
          process.env.TOKEN_SECRET_KEY as unknown as string,
          (err) => {
            if (err) {
              return res.sendStatus(403);
            }
            next();
          },
        );
      } else {
        // token type not bearer
        res.status(401).send({ error: 'token type not bearer' });
      }
    } else {
      // No Token Provided.
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
};

export default validateToken;
