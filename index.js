const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/repos', async (req, res) => {
  try {
    // Chama a API pública do GitHub para listar os repositórios da Takenet
    const response = await axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc');

    // Obtém os 5 repositórios mais antigos
    const repos = response.data.slice(0, 5).map(repo => ({
      title: repo.full_name,
      description: repo.description,
      image: 'https://avatars.githubusercontent.com/u/21820756?v=4',  // Avatar do Blip no GitHub
    }));

    res.json(repos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados do GitHub');
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
