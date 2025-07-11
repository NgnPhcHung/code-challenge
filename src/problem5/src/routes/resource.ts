import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const resource = await prisma.resource.create({ data: req.body });
  res.json(resource);
});

router.get("/", async (req, res) => {
  const { name } = req.query;
  const resources = await prisma.resource.findMany({
    where: name ? { name: { contains: String(name) } } : {},
  });
  res.json(resources);
});

router.get("/:id", async (req, res) => {
  const resource = await prisma.resource.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(resource);
});

router.put("/:id", async (req, res) => {
  const resource = await prisma.resource.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(resource);
});

router.delete("/:id", async (req, res) => {
  await prisma.resource.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
});

export default router;
