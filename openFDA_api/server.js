const request = require('request');
const searchTerm = 'naproxen';
const queryURL = `https://api.fda.gov/drug/label.json?search=${searchTerm}`;


//   FULL RESULTS OBJECT
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results;
//     }
//     console.log(info);
// })


/****************************************************************************

                  					 GENERAL INFORMATION
			
****************************************************************************/

// //GENERIC NAME
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].openfda.generic_name;
//     }
//     console.log(info);
// })


// //DESCRIPTION
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].description;
//     }
//     console.log(info);
// })


// //PURPOSE
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].purpose;
//     }
//     console.log(info);
// })


// // INDICATIONS AND USAGE
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].indications_and_usage;
//     }
//     console.log(info);
// })




/**************************************************************************

															PREGNANT WOMEN

**************************************************************************/


// //PREGNANT OR BREAST FEEDING WARNING
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].pregnancy_or_breast_feeding;
//     }
//     console.log(info);
// })

// //PREGNANCY
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].pregnancy;
//     }
//     console.log(info);
// })

// //NURSING MOTHERS
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].nursing_mothers;
//     }
//     console.log(info);
// })

/***************************************************************************

																WARNINGS

***************************************************************************/



// //WARNINGS
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].warnings;
//     }
//     console.log(info);
// })


// //BOXED WARNING
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].boxed_warning;
//     }
//     console.log(info);
// })


// //ASK DOCTOR
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].ask_doctor;
//     }
//     console.log(info);
// })


// //DO NOT USE WITH
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].do_not_use;
//     }
//     console.log(info);
// })


// //DRUGER INTERACTIONS
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].drug_interactions;
//     }
//     console.log(info);
// })


// //ADVERSE REACTIONS
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].adverse_reactions;
//     }
//     console.log(info);
// })


// //OVERDOSAGE
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].overdosage;
//     }
//     console.log(info);
// })



/*********************************************************************

											CHILDREN

**********************************************************************/



// //PEDIATRIC USE
// request(queryURL, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body).results[0].pediatric_use;
//     }
//     console.log(info);
// })