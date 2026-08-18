const express = require("express");
const equipeRoutes = require("./routes/equipeRoutes");
const desenvolvedorRoutes = require("./routes/desenvolvedorRoutes");

const app = express();

app.use(express.json());

app.use("/equipes", equipeRoutes);
app.use("/equipe", equipeRoutes);
app.use("/desenvolvedores", desenvolvedorRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
