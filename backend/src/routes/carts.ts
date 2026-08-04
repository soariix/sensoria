import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { addItemToCart, updateCartItem, removeCartItem, getCart } from '../modules/cart/controller';

const router = Router();

router.post('/cart/items', authMiddleware, addItemToCart);
router.put('/cart/items/:id', authMiddleware, updateCartItem);
router.delete('/cart/items/:id', authMiddleware, removeCartItem);
router.get('/cart', authMiddleware, getCart);

export default router;