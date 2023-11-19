import {Router} from 'express';

const router = Router();

// api routes
router.get('/', (req, res) => {
  res.status(200).send('Hello worlds!');
});

export default router;