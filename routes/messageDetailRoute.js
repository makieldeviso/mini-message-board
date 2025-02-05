import { Router } from 'express';
import messageDetailController from '../controllers/messageDetailController.js';

const messageDetailRouter = Router();

messageDetailRouter.get('/:id', messageDetailController.getMessageDetail);

export default messageDetailRouter;