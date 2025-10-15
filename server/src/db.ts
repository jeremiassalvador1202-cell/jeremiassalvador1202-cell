import mysql from "mysql2";

class Database {
  private static instance: mysql.Connection | null = null;

  private constructor() {}

  public static getInstance(): mysql.Connection {
    if (!Database.instance) {
      Database.instance = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "testdb"
      });

      // run a test query using the created connection
      Database.instance.query(
        "SELECT * FROM users",
        (err: mysql.QueryError | null, results: any) => {
          if (err) {
            console.error("❌ Query error:", err);
          } else {
            console.log("📋 Users:", results);
          }
        }
      );
    }
    // non-null assertion since instance is initialized above
    return Database.instance!;
  }
}

export default Database; // ✅ make sure ito ay naka-add