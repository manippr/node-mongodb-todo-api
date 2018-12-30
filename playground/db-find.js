const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'todo-app';

MongoClient.connect(url,(err,client) =>{
  if(err){
    return console.log('Cannot connect to mongodb server.');
  }

  console.log('Connected to mongodb server');
  const db = client.db(dbName);

  // db.collection('Todos').find({_id : new ObjectID('5c280f040f5485221613f925')}).toArray().then((docs) =>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('unable to read data from server',err);
  // });

  db.collection('Users').find({name : "Mani R"}).toArray().then((docs) =>{
    console.log(console.log(docs));
  },(err) =>{
    console.log('unable to read data from server',err);
  });

  client.close();
});
