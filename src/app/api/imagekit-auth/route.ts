import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET() {
    try{
        const authParameter= NextResponse.json(imagekit.getAuthenticationParameters());
        return NextResponse.json(authParameter)

    }catch(err){
        console.log(err);
        return NextResponse.json(
            {
            error:"ImageKit auth Failed"
        },
        {
            status:500,
        }
    );
    }

}
