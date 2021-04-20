import { Router } from "express";
import auth from '../routes/auth.routes';
const router = Router();


router.use('/auth', auth)

router.get('/', (req, res) => {
    const data = {
        author: "David Leiva",
        version: "v1.0"
    }
    res.json(data)
})



export default router;