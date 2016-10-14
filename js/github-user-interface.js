var getRepos = require('./../js/github-user.js').getRepos;
$(document).ready(function(){
  $('#user-form').submit(function(event){
    event.preventDefault();
    $('#display-results').empty();
    var username = $('#username').val();
    getRepos(username);
  });
});
