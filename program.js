const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, client) => {
  if (err) throw err;

  const db = client.db("learnyoumongo");

  const myDoc = { firstName: process.argv[2], lastName: process.argv[3] };

  db.collection("parrots").insert(myDoc, (err, data) => {
    if (err) throw err;

    console.log(JSON.stringify(myDoc));
  });

  client.close();
});
