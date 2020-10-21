var MongoClient = require('mongodb').MongoClient;

const configJson = require('./config/default.json');

const mongodbConfig = configJson.mongodb;

const { baseURL, dbName, collectionName} = mongodbConfig;

async function insertRecord(myobj) {
let client;

try {
  client = await MongoClient.connect(baseURL);
  const db = client.db(dbName);
  const r = await db.collection(collectionName).insertOne(myobj);
} catch (err) {
  console.log(err.stack);
}
if (client) {
  client.close();
}
};


async function getRecord(id) {
  let client;
const recordId = parseInt(id);
  try {
    client = await MongoClient.connect(baseURL);
    const db = client.db(dbName);
    const r = await db.collection(collectionName).find().toArray();
    return r.find(item => item.hashId === recordId);
  } catch (err) {
    console.log(err.stack);
  }
  if (client) {
    client.close();
  }
}


exports.insertRecord = insertRecord;
exports.getRecord = getRecord;