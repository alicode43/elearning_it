import mongoose from 'mongoose';


const DB_URL=process.env.MONGODB_URL!;
console.log(DB_URL);
if(!DB_URL){
    throw new Error("MONGODB_URL not provided , Please Provide a URL in env");

}

let cached=global.mongoose;

if(!cached){
    cached=global.mongoose= {conn:null,promise:null};
}

export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts={
            bufferCommands:true,
            maxPoolSize:10,
        }
  
  
   cached.promise=mongoose
   .connect(DB_URL,opts)
   .then(()=> mongoose.connection )
}

cached.conn=await cached.promise;
  try{

  }catch(err){
        cached.conn=null;
        console.log(err);
        throw new Error("Error 123in connecting to database");
  }
  console.log(cached.conn);
  return cached.conn;
};