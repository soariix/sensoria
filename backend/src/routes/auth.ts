import { Router } from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Nome, email e senha são obrigatórios." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return res.status(201).json({
        message: "Usuário registrado com sucesso.",
        user: {
            name,
            email,
            password: hashedPassword
        },
    });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  const fakeUser = {
    email: "teste@email.com",
    password: await bcrypt.hash("123456", 10),
  };

  const validPassword = await bcrypt.compare(password, fakeUser.password);

  if (!validPassword || fakeUser.email !== email) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });

  return res.json({
    message: "Login realizado com sucesso",
    token,
  });
});

export default router;