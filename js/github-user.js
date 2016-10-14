var apiKey = require('./../.env').apiKey;


exports.getRepos = function(username){
  //Makes api call for user info
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log("******" + response);

    $('#display-results').prepend('<h2 id="display-username">' + response.name + '</h2><h5>' + response.email + '</h5>');
  }).fail(function(error){
    //Displays an error message if no repo is found
    $('#display-results').append('<h4>No account found for <strong>\"' + username + '\"</strong></h4><h4>Please check the username and try again</h4>')
    console.log(error.responseJSON.message);
  });
  //Makes api call for repo info
  $.get('https://api.github.com/users/' + username + '/repos?per_page=100&access_token=' + apiKey).then(function(response){

    $('#display-results').append('<h4><span>view public repositories</span></h4><ol id="repo-list">');
    for(var i = 0; i < response.length; i++){
      if(response[i].description === null){
        response[i].description = "this repo has no description";
      }
      $('#repo-list').append('<li><a href="' + response[i].clone_url + '">' + response[i].name + '</a></li>' + '<ul><li>Description:' + response[i].description + '</li><li>Date created: ' + response[i].created_at + '</li></ul>');
      // console.log(response[i]);
    }
  $('#repo-list').append('</ol>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
