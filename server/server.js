var env = process.env.NODE_ENV || 'development';
console.log("env********",env);
if (env==='development') {
  process.env.port=3000;
  process.env.MONGO_URI = "mongodb://localhost:27017/TodoApp";
}else if (env==='test') {
  process.env.port=3000;
  process.env.MONGO_URI = "mongodb://localhost:27017/TodoAppTest";
}

var express = require('express');
const port = process.env.PORT || 27018;

var bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

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

app.get('/todos/:id',(req,res)=>{
  var id =req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    res.send({todo});
  }).catch((e)=>{
    res.status(404).send();
  });
});

app.delete('/todos/:id',(req,res)=>{
  var id =req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return false;
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
      return res.send(todo);
  });
});

//POST users
app.post('/users',(req,res)=>{
  var body = _.pick(req.body,['email','password']);
  console.log(body);
  var user = new User(body);


  user.save().then(()=>{
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

app.listen(port,()=>{
  console.log(`Started o port ${port}`);
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
