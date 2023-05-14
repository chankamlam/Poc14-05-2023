module.exports = {
  client: "mysql2",
  connection: {
    host: "mysql",
    port: 3306,
    user: "root",
    password: "Test@5201314",
    database: "demo",
  },
  migrations: {
    directory: __dirname + "/db/migrations",
  },
  seeds: {
    directory: __dirname + "/db/seeds",
  },
};
