// const MongoClient= require('mongodb').MongoClient;
const  {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to MongoDB Server');

    db.collection('Users').find().count().then((count)=>{
      console.log(`Todos Count: ${count}`);
    },(error)=>{
      console.log('unable to fetch todos',console.error);
    });



// db.collection('Users').find({
//   _id:new ObjectID('5afcfba719d56812f0a8491b')
// }).toArray().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
// },(error)=>{
//   console.log('unable to fetch todos',console.error);
// });

    db.close();

});
