const express = require('express');
const bodyParser = require('body-parser');
const sequelize  = require('./config/database');
const ideaRoutes = require('./routes/ideaRoutes');  
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use('/ideas', ideaRoutes);  
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });