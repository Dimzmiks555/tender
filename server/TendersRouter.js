import Router from 'express'
import TendersController from './TendersController.js'

const router = new Router();

// router.post('/tenders');

router.get('/tenders', TendersController.getAll)

// router.get('/tenders:id');

// router.put('/tenders');

// router.delete('/tenders:id');


export default router;