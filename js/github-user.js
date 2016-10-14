var apiKey = require('./../.env').apiKey;


exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('#display-username').text(response.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + userName + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('#repo-list').append('<li>' + response[i].name + '</li>');
      console.log(response[i]);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
