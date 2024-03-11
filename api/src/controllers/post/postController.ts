import { Request, Response } from 'express';
import { postModel } from '../../models/post/postModel';

export const postController = {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    try {
      const post = await postModel.createPost(title, description);
      Reflect.deleteProperty(post, 'password');
      res.status(201).send(post);
    } catch (err) {
      res.status(500).send({ message: 'Can not create post'})
    }
  },

  async updatePost(req: Request, res: Response) {
    const id = req.params.id
    const { title, description } = req.body

    try {
      const updatedPost = await postModel.updatePost(id, { title, description });
      res.status(201).send(updatedPost);
    } catch (err) {
      res.status(500).send({ message: 'Can not update post'})
    }
  },

  async deletePost(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await postModel.deletePost(id);
      res.status(201).send({ message: 'Post deleted.' });
    } catch (err) {
      res.status(500).send({ message: 'Can not delete post'})
    }
  },

  async getPosts(req: Request, res: Response) {
    try {
      const posts = await postModel.findPosts();
      res.status(201).send(posts);
    } catch (err) {
      res.status(500).send({ message: 'Can not find posts'})
    }
  }
};
