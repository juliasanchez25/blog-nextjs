import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const postModel = {
  async findPost(title: string, description: string) {
    const post = await prisma.post.findFirst({
      where: {
        title,
        description
      }
    });

    return post;
  },

  async createPost(title: string, description: string) {
    const post = await prisma.post.create({
      data: {
        title,
        description
      }
    });

    return post;
  },

  async updatePost(id: string, data: { title?: string; description?: string }) {
    const post = await prisma.post.update({
      where: { id },
      data: data
    });

    return post;
  },

  async deletePost(id: string) {
    const post = await prisma.post.delete({
      where: { id }
    });

    return post;
  },

  async findPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  }
};
