const db = require("../data/config");

function find() {
  return db("authors");
}

function findById(id) {
  return db("authors").where({ id }).first();
}

async function create(data) {
  const [id] = await db("hobbits").insert(data);
  return findById(id);
}

async function remove(id) {
  return db("hobbits").where({ id }).del();
}

module.exports = {
  find,
  findById,
  create,
  remove,
};
