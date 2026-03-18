# 🎬 Movie API

API REST para gerenciamento de filmes, usuários e avaliações.

---

## 📌 Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* Dotenv

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

* Node.js
* MySQL
* Git

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/JazahAlencar/movie-api.git
cd movie-api
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Criar o banco de dados no MySQL

```sql
CREATE DATABASE movie_api;
```

---

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=movie_api
DB_DIALECT=mysql
```

---

### 5. Criar as tabelas automaticamente

```bash
node sync.js
```

---

### 6. Rodar o servidor

```bash
npm start
```

---

## 📡 Endpoints da API

### 🎥 Filmes

* `GET /movies` → Listar filmes
* `POST /movies` → Criar filme
* `PUT /movies/:id` → Atualizar filme
* `DELETE /movies/:id` → Deletar filme

---

### 👤 Usuários

* `GET /users` → Listar usuários
* `POST /users` → Criar usuário

---

### ⭐ Avaliações

* `POST /reviews` → Criar avaliação
* `GET /reviews` → Listar avaliações

---

## 🧪 Exemplo de requisição

### Criar um filme

```json
POST /movies

{
  "title": "Interestelar",
  "duration": 169,
  "sinopse": "Exploração espacial em busca de um novo lar"
}
```

---

## 📁 Estrutura do projeto

```
movie-api/
│
├── config/
├── controllers/
├── models/
├── routes/
├── services/
├── .env
├── .gitignore
├── package.json
├── server.js
└── sync.js
```

---

## 👨‍💻 Autor

Desenvolvido por Jazah Alencar 💜  
Projeto para fins de estudo e prática em desenvolvimento de APIs.
