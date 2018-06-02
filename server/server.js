var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
    console.log("Save");
  },(error)=>{
    console.log("unable to save",error);
    res.status(400).send(e);
  });

});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
      res.status(400).send(e);    
  })
});

app.listen(27018,()=>{
  console.log("Started o port 27018");
})


module.exports = {app};


// var newTodo = new Todo({
//   //text: "Cooking1",
//   completed:true,
//   completedAt:1
// });

// var otherTodo = new Todo({
//   //text: "Cooking1",
//   completed:true,
//   completedAt:1
// });

// var otherTodo1 = new Todo({
//   text: " Ravindra Kumar ",
//   //completed:true,
//   completedAt:1
// });
//
// otherTodo1.save().then((doc)=>{
//   console.log("Saved data",doc);
// },(e)=>{
//   console.log("Unable to save",e);
// });
