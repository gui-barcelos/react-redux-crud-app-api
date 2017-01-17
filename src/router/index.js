import express from 'express';
import productRoutes from './routes/product';

const router = express.Router();
router.get('/api-status', (req,res) => {
    res.json({
        status: 'ok'
    })
});

router.use(productRoutes);

export default router;