import { Router } from 'express';
import GoogleController from './google.controller';

const router = Router();

router.post('/login', GoogleController.login);
router.get('/callback', GoogleController.callback);
router.get('/logout', GoogleController.logout);

export default router;
