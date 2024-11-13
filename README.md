<h1 align="center"> Desafio de construção de Chatbot BLIP - Daniel Reis </h1> <p align="center"> Teste Prático - Dev </p> <p align="center"> <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-Desafios do Projeto">Desafios do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#memo-licença">Licença</a> </p> <p align="center"> <img src="https://hermes.digitalinnovation.one/tracks/79f33eef-9c5b-47bd-9704-83ccfce39795.png" width="60%" height="10%"> </p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework para construção da API RESTful.
- **Heroku**: Hospedagem da api no servidor backend.
- **Blip Builder**: Plataforma de criação e gerenciamento de chatbots.
- **Regex**: Para validação de entradas e controle de fluxo do chatbot.
- **GitHub API**: API pública do GitHub consumida para listar repositórios.

## 💻 Desafios do Projeto:

**Validação de Entrada**: O chatbot valida a entrada do usuário com expressões regulares (regex), garantindo que apenas respostas válidas sejam aceitas.
**Integração com a API do GitHub**: A API intermediária consome dados do GitHub e retorna informações sobre os repositórios de um usuário.
**Tratamento de Erros**: O bot lida com falhas de fluxo e da API, oferecendo ao usuário opções para corrigir erros ou encerrar a conversa.
**Fluxo Interativo**: O chatbot apresenta opções de menu e interage com o usuário para coletar dados e exibir resultados de maneira fluida.

## 🛠 Como resolvi o desafio

Criação da API com Node.js e Express
A primeira etapa foi criar uma API RESTful utilizando Node.js e o Express, que seriam responsáveis por fazer a comunicação entre o chatbot e a API pública do GitHub. Aqui estão os passos que segui para criar a API:

Instalação do Node.js e Express: Criei o projeto utilizando o Node.js, e instalei o Express como dependência principal para gerenciar as rotas e requisições HTTP.


A rota /repos/:username consome a API do GitHub, que retorna os repositórios públicos do usuário. Em caso de erro, a API retorna uma mensagem de falha.

Testes Locais: Testei a API localmente utilizando ferramentas como Postman e o navegador para garantir que os dados estavam sendo retornados corretamente.

Hospedagem no Heroku

Após o desenvolvimento da API, hospedei o servidor no Heroku para torná-lo acessível para o chatbot:


Configuração no Heroku: Criei uma aplicação no Heroku e configurei o repositório local para fazer o deploy automático.


Variáveis de Ambiente: Utilizei variáveis de ambiente no Heroku para configurar valores sensíveis, como as credenciais da API, garantindo que não houvesse dados expostos no código.


Verificação de Deployment: Após o deploy no Heroku, acessei a URL fornecida pelo Heroku para garantir que a API estava funcionando corretamente.

Integração com o Blip Builder

Para conectar a API com o Blip Builder e criar o fluxo do chatbot, criei blocos que faziam chamadas à API hospedada no Heroku para buscar os repositórios e exibir as informações para o usuário.

Validação de Entradas: Utilize expressões regulares para garantir que o nome de usuário do GitHub fosse válido antes de realizar a requisição.

Tratamento de Erros: Adicionei um bloco para tratar erros no fluxo, caso a API falhasse ou o nome de usuário fosse inválido.

Exibição dos Repositórios: Após receber a resposta da API, exibi a lista de repositórios ou uma mensagem de erro ao usuário.

:memo: Licença
Esse projeto está sob a licença MIT.

Feito com ♥ by Daniel Reis :wave: Participe da minha comunidade! <br/> <br/> <a href="https://www.linkedin.com/in/danielcvtreis/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
