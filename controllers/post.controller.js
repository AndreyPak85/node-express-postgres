const db = require('../db');

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    console.log(req.body);
    const newPost = await db.query(
      `INSERT INTO post (title, content, userId) values($1, $2, $3) RETURNING *`,
      [title, content, userId]
    );
    res.json(newPost.rows);
  }

  async getPostsByUser(req, res) {
    const userId = req.query.id;
    const posts = await db.query('select * from post where userid = $1', [
      userId,
    ]);
    res.json(posts.rows);
  }
}

module.exports = new PostController();
