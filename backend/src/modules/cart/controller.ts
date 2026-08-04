import { Request, Response } from 'express';

export const addItemToCart = (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { productId, quantity } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    if (!productId || !quantity) {
      return res.status(400).json({ message: 'productId e quantity são obrigatórios' });
    }

    res.json({ message: 'Item adicionado ao carrinho', userId, productId, quantity });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar item ao carrinho' });
  }
};

export const updateCartItem = (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    const { quantity } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    if (!quantity) {
      return res.status(400).json({ message: 'quantity é obrigatória' });
    }

    res.json({ message: 'Item atualizado', userId, itemId: id, quantity });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item do carrinho' });
  }
};

export const removeCartItem = (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    res.json({ message: 'Item removido do carrinho', userId, itemId: id });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover item do carrinho' });
  }
};

export const getCart = (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    res.json({ message: 'Carrinho do usuário', userId, items: [] });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar carrinho' });
  }
};
