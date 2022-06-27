const Certificates = require('../models/certificates');


function addCertificates(certificates){
  return new Promise((resolve, reject) => {
    let i = 0;
   certificates.forEach(certificate => {
       certificate.id = ++i;
   });


   Certificates.insertMany(certificates, (err, result) =>{
    const ids= [];
    if(err) resolve(ids);
    if(result){
        result.forEach(value => {
            ids.push(value._id)
        });
        resolve(ids);
    };
   });
});
}

function updateCertificates(certificates){
  return new Promise((resolve, reject) => {
    let i = 0;
   certificates.forEach(certificate => {
       certificate.id = ++i;
   });
   Certificates.insertMany(certificates, (err, result) =>{
    const ids= [];
    if(err) resolve(ids);
    if(result){
        result.forEach(value => {
            ids.push(value._id)
        });
        resolve(ids);
    };
   });
});
}


module.exports = {
   addCertificates,
   updateCertificates
}