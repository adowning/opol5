const stitch = require("mongodb-stitch")
const clientPromise = stitch.StitchClientFactory.create('opol5-mbqio');
clientPromise.then(client => {
  const db = client.service('mongodb', 'mongodb-atlas').db('people');
  client.login().then(() =>
    db.collection('user_profiles').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
  ).then(() =>
    db.collection('user_profiles').find({owner_id: client.authedId()}).limit(100).execute()
  ).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });
});
