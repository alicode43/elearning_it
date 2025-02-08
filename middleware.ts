import withAuth from "next-auth/middleware"
import { defaultConfig } from "next/dist/server/config-shared"

import { NextResponse } from "next/server"


export default withAuth(
    function middleware() {
        return NextResponse.next()

    },
    callbacks:{
        authorized:({token,req})=>{
            const {pathname}=req.nextUrl;
            if(
                pathname==="/" ||
                pathname.startWith("/api/auth") ||
                pathname==="/register"||
                pathname==="/login"||
            
            ){
                return  true;
            }
            if(pathname.startWith("/api/videos"){
                return true;
            }

            return !token


            }
        }
    }
)
export const config={
    matcher:[]
}