import Router from 'express'
import TendersController from './TendersController.js'

const router = new Router();

router.post('/docs/:id', TendersController.create);

export default router;