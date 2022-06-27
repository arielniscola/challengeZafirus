const Work_experiences = require('../models/work_experiences');

 async function addWorkExperience(works){
    return new Promise((resolve, reject) => {
        let i = 0;
        works.forEach(work => {
            work.id = ++i;
        });


        Work_experiences.insertMany(works, (err, result) =>{
            const ids= [];
            if(err) reject(ids);
            if(result){
                result.forEach(value => {
                    ids.push(value._id)
                });
            };
            resolve(ids)
        });
    });
}


async function updateWork(works){
    return new Promise((resolve, reject) => {
        let i = 0;
        works.forEach(work => {
            work.id = ++i;
        });

        Work_experiences.insertMany(works, (err, result) =>{
            const ids= [];
            if(err) reject(ids);
            if(result){
                result.forEach(value => {
                    ids.push(value._id)
                });
            };
            resolve(ids)
        });
    });
}


module.exports = {
    addWorkExperience,
    updateWork
}