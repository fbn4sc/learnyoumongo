const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db("learnyoumongo");

  db
    .collection("parrots")
    .find({ age: { $gt: parseInt(process.argv[2], 10) } })
    .project({ name: true, age: true, _id: false })
    .toArray((err, docs) => {
      console.log(docs);
    });

  client.close();
});
