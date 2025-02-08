 
import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/User';
import { connectToDatabase } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const authOption:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials) {
                if(!credentials){
                    throw new Error("Please Provide Email and Password both");
                }
                if(!credentials.email || !credentials.password){
                     throw new Error("Please Provide Email or Password");
                }
                try{
                    await connectToDatabase();
                    const user=await User.findOne({ email: credentials.email});
              
                    if(!user){
                        throw new Error("User not found");
                    }
                    const isValid = await bcrypt.compare(
                        credentials.password,
                        user.password
                      );
            
                      if (!isValid) {
                        throw new Error("Invalid password");
                      }
            
                      return {
                        id: user._id.toString(),
                        email: user.email,
                      };

                }
                catch(err){
                    console.log(err);
                    throw new Error("Error in Authorize");
                }
              }


        })
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
            }
            return token;
        },
        async session({session,token}){
            // session.user=token.user;
            if(session.user){
                session.user.id=token.id as string;
            }
            return session;
        }
    },
    pages:{
        signIn:'/login',
        error:'/login',
    },
    session:{
        strategy:'jwt',
        maxAge:30*24*60*60,
    },
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
}