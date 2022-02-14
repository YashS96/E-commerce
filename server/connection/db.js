import mongoose from 'mongoose'

let  Connection = async (username, password) => {
    try{ 
        //Atlas 
        let connectionString='';
        let connect = await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}) 
        console.log(`DB connected!!`)
    }
    catch(err){
        console.log(`Oops! Sry Db isn't responding, hope  you understand, nothing personal.`)
        console.error(err)
    }
    finally{
        console.log(`Db connection attempent has been made.`)
    }
}

export default Connection;