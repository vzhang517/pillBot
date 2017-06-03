// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");



// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  descriptionQuery: function(drug) {

    console.log(drug);

  
    var queryURL = "https://api.fda.gov/drug/label.json?search=" + drug;
    return axios.get(queryURL).then(function(response) {

      if (response.data.results) {
        console.log (response.data.results);
        return response.data.results[0].description;
        
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  warningsQuery: function(drug) {

  console.log(drug);


  var queryURL = "https://api.fda.gov/drug/label.json?search=" + drug;
  return axios.get(queryURL).then(function(response) {

    if (response.data.results[0]) {
      console.log(response.data.results[0].warnings[0]);
      return response.data.results[0].warnings;
    }
    // If we don't get any results, return an empty string
    return "";
  });
},

  drug_interactionsQuery: function(drug) {

  console.log(drug);


  var queryURL = "https://api.fda.gov/drug/label.json?search=" + drug;
  return axios.get(queryURL).then(function(response) {

    if (response.data.results[0]) {
      console.log(response.data.results[0].drug_interactions);
      return response.data.results[0].drug_interactions;
    }
    // If we don't get any results, return an empty string
    return "";
  });
},





};


module.exports = helper;
