module.exports = {

  //QUANDO MIGRATION FOR EXECUTADA METODO UP
  up: (queryInterface) => {
   
     //CRIA TABELA NO BANCO DE DADOS  ' USERS '
      return queryInterface.createTable('users', { 
     // COLUNAS 
      id: {
      type: Sequelize.INTEGER,      // TIPO   
      allowNull: false,   //NAO PERMITE NULO
      autoIncrement: true, //AUTO INCREMENTAL 
      primaryKey: true,   //CHAVE PRIMARIA
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,   //NÃO PERMITE EMAIL REPETIDO

      },
      password_has: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEN,
        defaultValue: false,  //VALOR DEFAULT
        allowNull : false,
      },
      created_at :{               // CAMPO QUE SALVA  A DATA DE CRIAÇÃO
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at :{
        type: Sequelize.DATE,// CAMPO QUE SALVA  A DATA DE UPATE
        allowNull: false,
      } ,     
    });

  },
    // SE PRECISADE DE HOOLLBACK
  down: (queryInterface) => {
   
      return queryInterface.dropTable('users');
   
  }
};
