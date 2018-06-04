const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5b14aad2ba03eb379c61620a";

if (!ObjectID.isValid(id)) {
  console.log("Id not valid");
  return false;
}

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//   console.log("Todos",todos);
// });

Todo.findById(id).then((todo)=>{
  if (!todo) {
return console.log("id not found");
  }
  console.log("Todo By id",todo);
}).catch((e)=>{
  console.log(e);
});
