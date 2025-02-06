import mongoose, { Schema,models,model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  _id:mongoose.Types.ObjectId;
  
  createdAt: Date;
  updatedAt: Date;

}

const useSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
},
{
  timestamps: true,
}
);

useSchema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,10);
  }
  next();
})


const User=models?.User<IUser> || model<IUser>('User',useSchema);
export default User;