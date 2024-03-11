import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userModel = {
  async findUserByEmailAndPassword(email: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password
      }
    });

    return user;
  },

  async createUser(name: string, email: string, password: string) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });

    return user;
  },

  async updateUser(id: string, data: { name?: string; email?: string; password?: string }) {
    const user = await prisma.user.update({
      where: { id },
      data: data
    });

    return user;
  },

  async deleteUser(id: string) {
    const user = await prisma.user.delete({
      where: { id }
    });

    return user;
  },

  async findUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
};
