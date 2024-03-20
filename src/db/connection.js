const mongoose= require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jackop.y8za5sk.mongodb.net/testingdb1`).then(()=>{
    console.log("DATABASe is Connected");
}).catch(err=>{
    console.log(err);
})

const Notes = mongoose.model("notes",new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}))

module.exports = Notes;