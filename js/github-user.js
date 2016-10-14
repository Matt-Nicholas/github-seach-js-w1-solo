var apiKey = require('./../.env').apiKey;


exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#display-username').text(response.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + userName + '/repos?per_page=100&access_token=' + apiKey).then(function(response){
    $('#display-username').after('<h4><span>view public repositories</span></h4>');
    for(var i = 0; i < response.length; i++){
      if(response[i].description === null){
        response[i].description = "this repo has no description";
      }
      $('#repo-list').append('<li>' + response[i].name + '</li>' +
                            '<ul><li>Description: '+ response[i].description + '</li><li>Date created: ' + response[i].created_at + '</li></ul>');
      // console.log(response[i]);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
