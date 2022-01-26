const db = require('../db');

class UserController {
  async createUser(req, res) {
    const newPerson = await db.query(
      `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
      [req.body.name, req.body.surname]
    );
    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const persons = await db.query(`SELECT * FROM person`);
    res.json(persons.rows);
  }

  async getUserById(req, res) {
    const person = await db.query(`SELECT * FROM person WHERE id = $1`, [
      req.params.id,
    ]);
    res.json(person.rows);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const updatedPerson = await db.query(
      `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
      [name, surname, id]
    );
    res.json(updatedPerson.rows);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const deletedPerson = await db.query(
      `DELETE FROM person where id = $1 RETURNING *`,
      [id]
    );
    res.json(deletedPerson.rows);
  }
}

module.exports = new UserController();
