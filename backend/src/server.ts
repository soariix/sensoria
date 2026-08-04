import express from "express";
import productsRouter from "./routes/products";
import categoriesRouter from "./routes/categories";
import authRouter from "./routes/auth";


const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});