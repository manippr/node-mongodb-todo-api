const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'todo-app';

MongoClient.connect(url,(err,client) =>{
  if(err){
    return console.log('Cannot connect to mongodb server.');
  }

  console.log('Connected to mongodb server');
  const db = client.db(dbName);

  // db.collection('Users').deleteOne({name : "Beula"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name : "Beula"}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({name : "Beula"}).then((result) => {
    console.log(result);
  });

  client.close();
});
