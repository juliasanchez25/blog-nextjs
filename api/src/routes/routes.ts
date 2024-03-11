import express from 'express';
import { userController } from '../controllers/user/userController';
import { postController } from '../controllers/post/postController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/cadastrar', userController.register);
router.post('/login', userController.login);
router.patch('/editar/:id', userController.updateUser);
router.delete('/excluir/:id', userController.deleteUser);

router.get('/posts', authMiddleware, postController.getPosts);
router.post('/criar', postController.create);
router.patch('/editar/:id', postController.updatePost);
router.delete('/excluir/:id', postController.deletePost);

export default router;
