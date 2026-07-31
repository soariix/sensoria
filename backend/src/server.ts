import express from "express";
import productsRouter from "./routes/products";
import categoriesRouter from "./routes/categories";

const app = express();
app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});