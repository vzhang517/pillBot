const request = require('request');
const searchTerm = '';
const queryURL = `https://api.fda.gov/drug/label.json?search=${searchTerm}`;


$(document).ready(function() {

    $("#search").on('click', function(event) {
        event.preventDefault();

        searchTerm = (this).val().trim()

        request(queryURL, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body).results;
            }
            console.log(info);
        })

    })


})


