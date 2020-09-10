const express = require("express");
const authorsModel = require("./authors-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await authorsModel.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const author = await authorsModel.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "No author by that id" });
    }

    res.json(author);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { newAuthor } = await authorsModel.create(req.body);
    res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
