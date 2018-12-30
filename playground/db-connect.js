const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'todo-app';

MongoClient.connect(url,(err,client) =>{
  if(err){
    return console.log('Cannot connect to mongodb server.');
  }

  console.log('Connected to mongodb server');
  const db = client.db(dbName);

  // db.collection('Todos').insertOne({title: 'mongodb insert from node'},(err,result)=> {
  //   if(err){
  //     return console.log('Error: cannot run query');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name : 'Mani R',
    age : 29,
    location : 'Bengaluru'
  },(err,result) =>{
    if(err){
      return console.log('Cannot insert the data');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
