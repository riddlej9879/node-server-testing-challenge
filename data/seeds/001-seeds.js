exports.seed = async function (knex) {
  await knex("authors").truncate();
  await knex("authors").insert([
    { name: "stephen king", booksWritten: 87 },
    { name: "dean koontz", booksWritten: 10 },
    { name: "neil gaiman", booksWritten: 32 },
    { name: "lisa jewell", booksWritten: 9 },
    { name: "terry pratchett", booksWritten: 32 },
  ]);
};
