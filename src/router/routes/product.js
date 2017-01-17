import express from 'express';
import productCtrl from '../../controllers/product';
import validations from './validations/product';
import validate from 'express-validation';

const router = express.Router();

router.route('/products')
    .get(productCtrl.list)
    .post(validate(validations.createProduct), productCtrl.create);

router.route('/products/:productId')
    .get(productCtrl.get)
    .put(validate(validations.updateProduct), productCtrl.update)
    .delete(productCtrl.remove);

router.param('productId', validate(validations.getProduct), productCtrl.load);
router.param('productId', productCtrl.load);

export default router;