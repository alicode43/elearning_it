import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay= new Razorpay({
    key_id:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret:process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!
});

export async function POST(){
    // const {amount, currency, receipt, notes} = await req.json();
    try{
        
        const order = await razorpay.orders.create({
            amount:100*100,
            currency:"INR",
            receipt:"reciept_"+Math.random().toString(36).substring(7),
            // callback_url: "",
            // notes
        });
        console.log(order);
        return NextResponse.json({orderId:order.id},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({orderId:"error in payment"},{status:500});
    }

    // return NextResponse.json(order);


}