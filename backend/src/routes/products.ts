import { Router } from "express";

const router = Router();

// Lista todos os Produtos
router.get("/", async (req, res) => {
    const { category, min, max } = req.query;

    const products = [
        { id: 1, name: "Perfume A", category: "Perfumes", price: 80 },
        { id: 2, name: "Perfume B", category: "Perfumes", price: 120 },
        { id: 3, name: "Perfume C", category: "Perfumes", price: 150 },
        { id: 4, name: "Shampoo", category: "Shampoo", price: 200 },
        { id: 5, name: "Condicionador", category: "Shampoo", price: 250 },
    ];

    const filtered = products.filter((product) => {
        const matchesCategory =
            !category || product.category === String(category);

        const price = Number(product.price);
        const minPrice = min ? Number(min) : undefined;
        const maxPrice = max ? Number(max) : undefined;

        const matchesMin = minPrice === undefined || price >= minPrice;
        const matchesMax = maxPrice === undefined || price <= maxPrice;

        return matchesCategory && matchesMin && matchesMax;
    });

    return res.json(filtered);
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
