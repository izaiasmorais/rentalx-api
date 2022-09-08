import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const all = categoriesRepository.create({ name, description });

  return response.status(201).json(all);
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.read();

  return response.json(all);
});

export { categoriesRoutes };
