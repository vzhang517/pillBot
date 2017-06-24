'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pillbot');

var db = mongoose.connection;

db.on('error', function(err) {
    console.error("Connection error: ", err);
});

db.once('open', function() {
    console.log("Database connection successful")

    var Schema = mongoose.Schema;
    var DrugSchema = new Schema({
        description: { type: String, default: "Not available" },
        warning: { type: String, default: "Not available" },
        interaction: { type: String, default: "Not available" }
    });

    var Drug = mongoose.model("Drug", DrugSchema);

    

});
