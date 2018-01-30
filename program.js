const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db(process.argv[2]);

  db
    .collection("users")
    .update({ username: "tinatime" }, { $set: { age: 40 } });

  client.close();
});
