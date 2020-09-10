exports.up = async function (knex) {
  await knex.schema.createTable("authors", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.integer("booksWritten").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("authors");
};
