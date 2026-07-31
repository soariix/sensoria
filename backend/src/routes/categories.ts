import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  // listar todas categorias
  return res.json([]);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  // buscar categoria por id
  return res.json({ id });
});

router.post("/", async (req, res) => {
  const data = req.body;
  // criar categoria
  return res.status(201).json(data);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // atualizar categoria
  return res.json({ id, ...data });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // deletar categoria
  return res.status(204).send();
});

export default router;