const mongoose=require("mongoose")


const connect=async()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/post')
    }
    catch(e){
        console.log(e.message)
    }

}
export default{connect}