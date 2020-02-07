import Sequelize,{ Model } from "sequelize"; //importar model de dentro do sequelize

  class User extends Model {
    static init(sequelize){ 
      super.init({                  
        name:   Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: sequelize.STRING,
        provider: Sequelize.BOOLEAN,


      },
      {
        sequelize,
      }
      ); //chamando  metodo init da classe model  / enviar as colunas 
 
    }
  }
  export default User;
