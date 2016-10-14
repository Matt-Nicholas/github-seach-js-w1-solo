var getRepos = require('./../js/github-user.js').getRepos;



$(document).ready(function(){
  $('#user-form').submit(function(event){
    event.preventDefault();

    var username = $('#username').val();
    getRepos(username);

  })
});
