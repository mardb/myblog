const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

async function connect(){
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('blog')
}

function getDb(){
  if(!database){
    throw {message: 'Database connection not established'};
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
}