const Users = require('../models/users');
const Work_experiences = require('./work_experiences');
const Certificates = require('./certificates');

async function addUser(req, res){
    const {id, name, last_name, phone, certificates, work_experiences, links} = req.body;

    const user = new Users();

    user.id = id;
    user.name = name;
    user.last_name = last_name;
    user.phone = phone;
    user.links = links;

    await Work_experiences.addWorkExperience(work_experiences).then((val) => {
      user.work_experiences = val;
    });
    await Certificates.addCertificates(certificates).then((val) => {
        user.certificates = val;
    });
   user.save((err, userSaved) => {
        if(err) return res.status(500).send({message:`Error en el servidor: ${err}`});
        if(userSaved){           
            return res.status(201).send('Usuario guardado correctamente');
        }
    });

}

async function updateUser(req, res){
    let { name, last_name, phone, certificates, work_experiences, links } = req.body;
    const id = req.params.id;
  
      await  Work_experiences.updateWork(work_experiences).then((val) => {
        work_experiences = val;
       });
      await Certificates.updateCertificates(certificates).then((val) => {
        certificates = val;
       });

    Users.findOneAndUpdate({'id': id}, {
        $set :{
        "name": name,
        "phone": phone,
        "last_name": last_name,
        "links": links,
        "work_experiences": work_experiences,
        "certificates": certificates
        }
    }, {new: true},(err, userSaved) => {
        if(err) return res.status(500).send({message: `Error en el servidor: ${err}`});
        if(userSaved){
            return res.status(201).send('Usuario actualizado correctamente');
        }
    });
}

function deleteUser(req, res){
    const id = req.params.id;

    Users.deleteOne({'id': id}).exec((err) => {
        if(err) res.status(500).send({message: 'Error en el servidor'});

        res.status(200).send({message: 'Usuario eliminado'});
    })
}

function userList(req, res){
    const page =req.query.page -1;
    const offset = req.query.offset;
    Users.find({}).limit(offset).skip(offset * page).exec((err, users) => {
        if(err) return res.status(500).send({message: 'Error en el servidor'});
        if(!users) return res.status(404).send({message:'No hay usuarios almacenados'});

        return res.status(200).json(users);
    })
}

function getUser(req, res){
    const idUser  = req.params.id;
  
    
   Users.findOne({'id': idUser}).populate('certificates').populate('work_experiences').exec((err, user) => {
        if(err) return res.status(500).send({message:'Error en el servidor' + err});
        if(!user) return res.status(404).send({message: 'No se encuentra usuario solicitado'});
        return res.status(200).json(user)         
    })
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    userList,
    getUser
}