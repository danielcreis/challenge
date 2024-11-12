const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Repositórios!");
});

app.get("/repos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/takenet/repos?sort=created&direction=asc"
    );

    const repos = response.data
      .filter((repo) => repo.language === "C#")
      .slice(0, 5)
      .map((repo) => ({
        title: repo.full_name,
        subtitle: repo.description || "Sem descrição",
        image: "https://avatars.githubusercontent.com/u/21820756?v=4",
      }));

    res.json(repos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao obter dados do GitHub");
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
