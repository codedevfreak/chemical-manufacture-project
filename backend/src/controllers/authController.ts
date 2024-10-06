import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const secret = 'your_jwt_secret';  // Use a secure env variable in production

// Register user
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json(user);
};

// Login user
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
  res.json({ token });
};

// Authenticate middleware
export const authenticate = (req: Request, res: Response, next: any) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, secret);
    req.userId = (decoded as any).id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
