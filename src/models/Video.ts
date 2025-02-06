import mongoose,{Schema,models,model} from "mongoose";
// import bcrypt from "bcryptjs";


export const VIDEO_DIMENSIONS={
    width:1280,
    height:720,
} as const;

export interface IVideo{
    title:string;
    description:string;
    videoUrl:string;
    _id:mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
    thumbnailUrl:string;
    controls:boolean;
    // dimensions:{
    //     width:number;
    //     height:number;
    // }
}

const video_schema= new Schema<IVideo>({
    title:{type:String,required:true},
    description:{type:String,required:true},
    videoUrl:{type:String,required:true},
    thumbnailUrl:{type:String,required:true},
    controls:{type:Boolean,default:true,required:true},
    // dimensions:{
    //     width:{type:Number,required:true},
    //     height:{type:Number,required:true},
    // }
},{timestamps:true});


const Video=models?.Video<IVideo> || model<IVideo>('Video',video_schema);

export default Video;