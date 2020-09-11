const express = require("express");
const authorsModel = require("./authors-model");

const router = express.Router();

router.get("/authors", async (req, res, next) => {
  try {
    res.json(await authorsModel.find());
  } catch (err) {
    next(err);
  }
});

router.get("/authors/:id", async (req, res, next) => {
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

router.post("/authors", async (req, res, next) => {
  try {
    const { newAuthor } = await authorsModel.create(req.body);
    res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
});

router.delete("/authors/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await authorsModel.remove(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
