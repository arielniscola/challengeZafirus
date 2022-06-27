var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
    
   id: {
    type: Number,
    required: true
   },
   name: String,
   last_name: String,
   phone: String,
   links: Map,
   certificates:[{
       type: Schema.ObjectId, ref: 'Certificates'  // aqui establecemos la relación con nuestro modelo certificados
   }],
   work_experiences:[{
      type: Schema.ObjectId, ref: 'WorkExperiences' // aqui establecemos la relación con nuestro modelo experiencia laboral
   }]
});

module.exports = mongoose.model('Users', UsersSchema);
