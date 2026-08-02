import connectDB from "@/components/utils/connectDB";
import {RegistrationModel} from "@/components/utils/model/registration";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {cookies} from "next/headers";
export async function POST(request: NextRequest) {
    const cookieStore = await cookies();
    const registered = cookieStore.get("registered");

    if(registered?.value === "true"){
        return NextResponse.json({message:"Already Registered", status:400}, { status: 400 });
    }
    
    const registrationData = await request.json();

    try{
        await connectDB();
        const newRegistration = new RegistrationModel(registrationData);
        await newRegistration.save();
        cookieStore.set("registered", "true", {path:"/", httpOnly:true, sameSite:"strict",secure:true});
        return NextResponse.json({message:"Registration Successful, We Will Get Back to You Soon", status:200}, { status: 200 });
    }catch(error: any){
        console.error("Error saving registration data:", error);
        if (error && error.code === 11000) {
            let field = "email, contact, or LinkedIn link";
            if (error.keyPattern) {
                field = Object.keys(error.keyPattern)[0];
            }
            return NextResponse.json({message:`An alumni with this ${field} is already registered!`, status:400}, { status: 400 });
        }
        return NextResponse.json({message:"Error while saving registration data, Try again later", status:500}, { status: 500 });
    }
}