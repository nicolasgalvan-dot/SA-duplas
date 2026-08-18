const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

router.post("/", async (req, res) => {
  try {
    const { nome, especialidade } = req.body;

    const equipe = await prisma.equipe.create({
      data: { nome, especialidade },
    });

    res.status(201).json(equipe);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const equipes = await prisma.equipe.findMany({
      include: { desenvolvedores: true },
    });

    res.json(equipes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

router.get("/:id/desenvolvedores", async (req, res) => {
  try {
    const { id } = req.params;

    const equipe = await prisma.equipe.findUnique({
      where: { id: Number(id) },
      include: { desenvolvedores: true },
    });

    if (!equipe) {
      return res.status(404).json({ erro: "Equipe não encontrada" });
    }

    res.json(equipe.desenvolvedores);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const { id, nome, especialidade } = req.body;

    const equipe = await prisma.equipe.update({
      where: { id: Number(id) },
      data: { nome, especialidade },
    });

    res.json(equipe);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.equipe.delete({
      where: { id: Number(id) },
    });

    res.json({ mensagem: "Equipe deletada com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

module.exports = router;
