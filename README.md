# Github user lookup

#### By **Matthew F Nicholas**

## Description
A site for users to search github users by username and see user and repository info

## Setup/Installation Requirements
* From the terminal enter the following commands:
    -$ npm install
    -$ bower install
    -$ touch .env

  * Create a new file to
  * Obtain a github API token
  * Save your api token in the .env
  * Export the api key
  * exports.apiKey = 'YOUR-API_KEY';

* Run gulp serve from the top level directory to execute the program
$ gulp serve



### BDD
| Behavior:                                          | Input Example:                             | Output Example:                            |
|----------------------------------------------------|--------------------------------------------|--------------------------------------------|
| Can list github profile info                       | "Matt-Nicholas"                            |  Name: Matthew F Nicholas                  |
| Can list github repositories                       | "Matt-Nicholas"                            |  Displays a list of repositories           |
| Displays error message if username is not found    | "lkasjdoiejlds"                            |  No user found                             |


## Support and contact details
Matt Nicholas: fostermatt82@gmail.com

## Technologies Used
  This site was designed using HTML, Bootstrap, javascript, jquery, bower and gulp. View the source code at https://github.com/Matt-Nicholas/github-seach-js-w1-solo.git


### License
*This site is Licensed under the MIT licensing*

Copyright (c) 2016 **_Matt Nicholas_**
