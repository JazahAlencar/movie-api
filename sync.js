const { sequelize } = require('./models');

async function syncDatabase() {
  try {
    console.log("Conectando ao banco e resetando tabelas...");

    // O force: true vai apagar as tabelas mal estruturadas e criar as novas

    await sequelize.sync({ force:false}); 
    
    console.log("Banco de dados resetado e sincronizado com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  } finally {
    process.exit();
  }
}

syncDatabase();