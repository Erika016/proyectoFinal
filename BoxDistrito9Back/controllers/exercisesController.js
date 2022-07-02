const dbMysql = require("../database/db");


/**
 * @class ExercisesController
 */

class ExercisesController {

  /**
   * Function to show all exercises
   * Funcion para mostrar todos los ejercicios
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  allExercises(req, res) {
    dbMysql.query(
      "SELECT * FROM exercises ORDER BY name",
      (error, rows) => {
        if (error) console.log({
          status: 'failed',
          data: rows,
          error: error.message
        });
        res.json({
          status: 'succedeed',
          data: rows,
          error: null
        });
      }
    );
  }


  /**
   * Function to search for an exercise by name
   * Función para buscar un ejercicio por nombre
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  searchExercises(req, res) {
    const termino = `${req.params.termino}%`;
    console.log(termino);
    dbMysql.query(
      "SELECT * FROM exercises where name LIKE ?",
      [termino],
      (error, rows, next) => {
        if (error) console.log({
          status: 'failed',
          data: rows,
          error: error.message
        });
        res.json({
          status: 'succedeed',
          data: rows,
          error: null
        });
      }
    );
  }


  /**
   * Function to search the weights of an exercise for a user
   * Función para buscar los pesos de un ejercicio para un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  searchWeight(req, res) {
    const {
      id_exerise
    } = req.params;
    const {
      id_User
    } = req.params;

    dbMysql.query(
      "SELECT * FROM max_weight id_exercise = ? and id_User LIKE ?",
      [id_exerise, id_User],
      (error, rows, next) => {
        if (error) console.log({
          status: 'failed',
          data: rows,
          error: error.message
        });
        res.json({
          status: 'succedeed',
          data: rows,
          error: null
        });
      }
    );
  }

  /**
   * Function to remove the weight of a user's exercise
   * Función para borrar el peso del ejercicio de un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  deleteWeight(req, res) {
    const {
      id_weight
    } = req.params;
    dbMysql.query(
      "DELETE FROM weight WHERE id_weight = ?",
      [id_weight],
      (error, rows) => {
        if (error) console.log({
          status: 'failed',
          data: rows,
          error: error.message
        });
        res.json({
          status: 'succedeed',
          data: rows,
          error: null
        });
      }
    );

  }

  /**
   * Function to add a weight of a user's exercise
   * Función para agregar un peso del ejercicio de un usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof ExercisesController
   */

  addWeight(req, res) {
    const {
      id_User
    } = req.body;
    const {
      id_exerise
    } = req.body;
    const {
      date
    } = req.body;
    const {
      weight
    } = req.body;

    dbMysql.query(
      'INSERT INTO Pesos (id_User, id_exercise, date, weight) VALUES (?, ?, ?, ?)',
      [id_User, id_exerise, date, weight],
      (error, rows) => {
        if (error) console.log({
          status: 'failed',
          data: rows,
          error: error.message
        });
        res.json({
          status: 'succedeed',
          data: rows,
          error: null
        });
      }
    );
  }

}

module.exports = ExercisesController = new ExercisesController();
