var getRepos = require('./../js/github-user.js').getRepos;

var userName = 'Matt-Nicholas';


$(document).ready(function(){
  getRepos(userName);
});
