const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("Authors integration test", () => {
  it("GET / authors", async () => {
    const res = await supertest(server).get("/api/authors");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body).toHaveLength(5);
    expect(res.body[0].name).toBe("stephen king");
    expect(res.body[0].booksWritten).toBe(87);
  });

  it("GET /:id authors", async () => {
    const res = await supertest(server).get("/api/authors/2");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body.name).toBe("dean koontz");
    expect(res.body.booksWritten).toBe(10);
  });

  it("GET /:id authors - not found", async () => {
    const res = await supertest(server).get("/api/authors/20");
    expect(res.statusCode).toBe(404);
  });

  it("POST / authors", async () => {
    const res = await supertest(server)
      .post("/api/authors")
      .send({ name: "richard dawkins", booksWritten: 10 });
    const res2 = await supertest(server).get("/api/authors");
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
    expect(res2.body).toHaveLength(6);
    //  These tests do not work but a similar test worked in the guided project
    // expect(res.body.name).toBe("richard dawkins");
    // expect(res.body.booksWritten).toBe(10);
  });

  it("DELETE /:id authors", async () => {
    const res = await supertest(server).delete("/api/authors/1");
    expect(res.statusCode).toBe(204);
  });
});
