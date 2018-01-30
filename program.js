const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db(process.argv[2]);

  db.collection(process.argv[3]).remove({ _id: process.argv[4] }, err => {
    if (err) throw err;

    client.close();
  });
});
