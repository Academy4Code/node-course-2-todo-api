var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type:String,
     required: [true, 'please enter email'],
     minlength:1,
     trim :true
   }
  });

  module.exports = {User};
