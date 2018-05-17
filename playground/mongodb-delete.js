// const MongoClient= require('mongodb').MongoClient;
const  {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to MongoDB Server');
//delete many
// db.collection('Users').deleteMany({name:'Ravi'}).then((docs)=>{
//   console.log(docs);
// });

//deleteone

// db.collection('Users').deleteOne({name:'Sony'}).then((result)=>{
//   console.log(result);
// });

//find one and delete
db.collection('Users').findOneAndDelete({age:40.0}).then((result)=>{
  console.log(result);
});
    db.close();

});
