const Student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentadd')
    }catch(err){
        console.log(err)
    }
}

async function getStudents(req,res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.render('studentdetail', {
            students : students  //same as let students = await Student.find({});
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    addStudent,
    getStudents
}