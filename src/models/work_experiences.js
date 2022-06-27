var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkExperiencesSchema = Schema({
    
   id: {
    type: Number,
    required: true
   },
   type: String,
   years_worked: Number
});

module.exports = mongoose.model('WorkExperiences', WorkExperiencesSchema);
