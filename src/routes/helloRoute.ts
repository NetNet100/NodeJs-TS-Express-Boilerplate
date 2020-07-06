import {Router} from 'express';
import {getHello} from "../controllers/helloController";

const router = Router();

router.route('/').get(getHello);

export default router;