const { default: mongoose } = require('mongoose');
const mongoode = require('mongoose');



const dbConnect = async()=>{
    try{
    const connect = mongoose.connect(process.env.CONNECTION_STRING);
    console.log("database is connected ");
    // console.log(`Database is connected ,${connection.name}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnect;