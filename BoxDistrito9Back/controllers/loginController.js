const dbMysql = require("../database/db");
const jwt = require("jsonwebtoken");


/**
 * @class LoginController
 */

class LoginController {

    /**
   * Function to show all exercises
   * Funcion para mostrar todos los ejercicios
   *
   * @param {*} req
   * @param {*} res
   * @memberof LoginController
   */

     login(req, res) {
      const user = {
        name: "Rosa",
        email: "rosa@gmail.com",
        id: 100,
      };
      
      jwt.sign({user}, 'secretKey', {expiresIn: '24h'}, (err, token) => {
        res.json({
          token,
        });
      });
    }

protected(req, res) {
  jwt.verify(req.token, 'secretKey', (err, data) =>{
    if(err){
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: 'protected',
        data
      })
    }
  })
}

}

module.exports = LoginController = new LoginController();
