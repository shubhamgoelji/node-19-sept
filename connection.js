const mongoose = require('mongoose');
async function connection() {
    try{
        let connect = await mongoose.connect(`mongodb://localhost:27017/batch1-new`);
        console.log("Connection created.....")
    }catch(err){
        console.log(err)
    }
}
module.exports = connection