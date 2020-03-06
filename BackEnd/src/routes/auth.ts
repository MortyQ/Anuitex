import {Router} from 'express';
const router: Router = Router();

router.get('/', (req, res)=>{
    res.send('Hi, this is my Server!')
})

export default router;