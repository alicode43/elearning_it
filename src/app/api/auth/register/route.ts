import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase} from '@/lib/db'
import User from "@/models/User";

export async function POST(request: NextRequest) {
   try{
  
    const {email, password} = await request.json();
    if(!email || !password){
        return  NextResponse.json(
            {Error:"Please Provide Email and Password"},
            {status:400}
        )
    }
    await connectToDatabase();
    const existedUser=await User.findOne({email});
    if(existedUser){
        return NextResponse.json(
            {Error:"User Already Exists"},
            {status:400}
        )
    }

    await User.create({email,password});
    return NextResponse.json(
        {Message:"User Created Successfully"},
        {status:201}
    )



   }catch(err){
         console.log(err);
         return NextResponse.json(
            {Message:"Failed to user creating"},
            {status:400}
        )
        //  return NextResponse.error(new Error("Error in connecting"));
   }
}



