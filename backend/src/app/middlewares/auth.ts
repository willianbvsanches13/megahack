import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import authConfig from '../../config/auth';
import { promisify } from 'util';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.id = decoded.id;
    req.email = decoded.email;
    req.name = decoded.name;

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
