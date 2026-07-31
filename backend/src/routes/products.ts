import { Router } from "express";

const router = Router();

// Lista todos os Produtos
router.get("/", async (req, res) => {
    return res.json([]);
});

//buscar produtos por ID 
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    return res.json({ id });
});

//criar produto
router.post("/", async (req, res) => {
    const data = req.body;
    return res.status(201).json(data);
})

//atualizar produto
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    return res.json({ id, ...data });
})

//deletar produto
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    return res.status(204).send();
});

export default router;
