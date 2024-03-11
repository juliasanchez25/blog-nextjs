import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { userModel } from '../../models/user/userModel';

export const userController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid login' });
    }

    const token = jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    return res.status(200).json({ user, token });
  },

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const user = await userModel.createUser(name, email, password);
      Reflect.deleteProperty(user, 'password');
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send({ message: 'Can not create user'})
    }
  },

  async updateUser(req: Request, res: Response) {
    const id = req.params.id
    const { name, email, password } = req.body

    try {
      const updatedUser = await userModel.updateUser(id, { name, email, password });
      res.status(201).send(updatedUser);
    } catch (err) {
      res.status(500).send({ message: 'Can not update user'})
    }
  },

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await userModel.deleteUser(id);
      res.status(201).send({ message: 'User deleted.' });
    } catch (err) {
      res.status(500).send({ message: 'Can not delete user'})
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      const users = await userModel.findUsers();
      res.status(201).send(users);
    } catch (err) {
      res.status(500).send({ message: 'Can not find users'})
    }
  }
};
