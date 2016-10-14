var apiKey = require('./../.env').apiKey;


exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('#display-username').text(response.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + userName + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++){
      console.log(response[i]);
    }
   $('#display-username').text(response.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
