var getRepos = require('./../js/github-user.js').getRepos;
var setOctocat = require('./../js/github-user.js').setOctocat;
$(document).ready(function(){

var imageSource = setOctocat(0,6);

  console.log("****" + imageSource);
  document.getElementById("octocat-background-img").src=imageSource;

  $('#user-form').submit(function(event){
    event.preventDefault();
    $('#display-results').empty();
    var username = $('#username').val();
    getRepos(username);
  });
});
