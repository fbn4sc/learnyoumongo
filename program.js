const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db("learnyoumongo");

  db
    .collection("prices")
    .aggregate([
      { $match: { size: process.argv[2] } },
      { $group: { _id: "avg", avg: { $avg: "$price" } } }
    ])
    .toArray((err, results) => {
      if (err) throw err;

      console.log(Number(results[0].avg).toFixed(2));

      client.close();
    });
});
