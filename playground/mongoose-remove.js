const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5b14aad2ba03eb379c61620a";

if (!ObjectID.isValid(id)) {
  console.log("Id not valid");
  return false;
}

Todo.remove({}).then((result)=>{
  console.log(result);
});

//5b14b6c87f0f710d2cabb2f3

Todo.findByIdAndRemove('5b14b6c87f0f710d2cabb2f3').then((todo)=>{
  console.log(todo);
});
