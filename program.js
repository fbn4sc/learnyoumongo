const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db("learnyoumongo");

  db
    .collection("parrots")
    .count({ age: { $gt: +process.argv[2] } }, (err, count) => {
      if (err) throw err;

      console.log(count);

      client.close();
    });
});
