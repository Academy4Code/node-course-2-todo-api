var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
     required: [true, 'please enter something'],
     minlength:1,
     trim :true
  },
  completed:{
    type:Boolean,
    default: false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports = {Todo};
