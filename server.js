const express = require('express');
const cors = require('cors');
const {sequelize} = require('./models')

const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

sequelize.sync({ alter: true })
  .then(() => console.log('Tabelas criadas ou atualizadas!'))
  .catch(err => console.error('Erro ao criar tabelas:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));