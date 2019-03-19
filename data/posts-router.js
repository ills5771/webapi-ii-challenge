const express = require("express");

const Posts = require("./db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The posts information could not be retrieved."
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The post information could not be retrieved."
    });
  }
});

router.post("/", (req, res) => {
  const newPost = req.body;
  if (newPost.title && newPost.contents) {
    Posts.insert(newPost)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  } else {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const count = await Posts.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The post could not be removed"
    });
  }
});

module.exports = router;
