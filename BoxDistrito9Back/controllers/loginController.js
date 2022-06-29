const dbMysql = require("../database/db");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../lib/utils");



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
    const pass = `${req.body.password}`;
    const email = `${req.body.email}`;
    console.log(email);
      dbMysql.query("SELECT * FROM users where email LIKE ?",
      [email], (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
          if (rows.length > 0) {
            if(pass === rows[0].password){
              res.status(200).json({
                status: "success",
                token: generateToken(rows, false),
                refresh_token: generateToken(rows, true),
                error: error || null,
              });
            }else {
              res
              .status(200)
              .json({ message: "incorrect username or password" });
            }
          } else {
            res
              .status(200)
              .json({ message: "incorrect username or password" });
          }
      });
    }
}

module.exports = LoginController = new LoginController();
