// const MongoClient= require('mongodb').MongoClient;
const  {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to MongoDB Server');

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5afd0cdb47cc0828c8dbfc50')
},{
  $set:
  {
    name:'Ravindra Kumar'
  },
   $inc:
    {
       "age": 1
    }
},{
  returnOriginal :true
}).then((result)=>{
  console.log(result);
});


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5afbbffd2465381fdc20b79a')
// },
// {
//   $set:
//   {
//     completed:true
//   }
// },
// {
//   returnNewDocument :false
// }).then((result)=>{
//   console.log(result);
// });

});
