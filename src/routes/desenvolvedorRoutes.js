const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

router.post("/", async (req, res) => {
  try {
    const { nome, nivel, equipeId } = req.body;

    const desenvolvedor = await prisma.desenvolvedor.create({
      data: { nome, nivel, equipeId: Number(equipeId) },
    });

    res.status(201).json(desenvolvedor);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const { id, nome, nivel, equipeId } = req.body;

    const desenvolvedor = await prisma.desenvolvedor.update({
      where: { id: Number(id) },
      data: { nome, nivel, equipeId: Number(equipeId) },
    });

    res.json(desenvolvedor);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.desenvolvedor.delete({
      where: { id: Number(id) },
    });

    res.json({ mensagem: "Desenvolvedor deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

module.exports = router;
