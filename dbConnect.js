import sqlite3 from "sqlite3";

const connectDB = () => {
  let db = new sqlite3.Database("./db/fns.db", err => {
    if (err) {
      return console.error(err.message);
    }
  });
  return db;
};
const disconnectDB = db => {
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
  });
};
const init = () => {
  const db = connectDB();
  db.run(
    `CREATE TABLE IF NOT EXISTS metadata (tokenId TEXT PRIMARY KEY, domain TEXT, url TEXT, address TEXT, registered_at DATETIME)`,
    err => {
      if (err) {
        console.error(err.message);
      }
      console.log("created metadata table.");
    }
  );
  disconnectDB(db);
};
export { connectDB, disconnectDB, init };
