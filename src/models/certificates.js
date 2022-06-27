var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CertificatesSchema = Schema({
    
   id: {
    type: Number,
    required: true
   },
   title: String,
   description: String
});

module.exports = mongoose.model('Certificates', CertificatesSchema);
