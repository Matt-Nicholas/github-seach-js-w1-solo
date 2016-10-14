var getRepos = require('./../js/github-user.js').getRepos;
var getRandom = require('./../js/github-user.js').getRandom;

$(document).ready(function(){
  var imageId = getRandom(0, 1);
  if(imageId === 0){

  }

  console.log(rand);
  $('#user-form').submit(function(event){
    event.preventDefault();
    $('#display-results').empty();
    var username = $('#username').val();
    getRepos(username);
  });
});
