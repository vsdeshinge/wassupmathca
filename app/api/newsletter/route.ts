import {NextResponse} from "next/server";
export async function POST(request:Request){
 const {email} = await request.json().catch(()=>({email:""}));
 if(typeof email!=="string"||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({message:"Please enter a valid email."},{status:400});
 const key=process.env.BREVO_API_KEY;const list=Number(process.env.BREVO_LIST_ID);
 if(!key||!Number.isInteger(list)||list<=0)return NextResponse.json({message:"Subscriptions are not available yet. Please try again later."},{status:503});
 try{const result=await fetch("https://api.brevo.com/v3/contacts",{method:"POST",headers:{"Content-Type":"application/json","api-key":key},body:JSON.stringify({email,listIds:[list],updateEnabled:true})});if(!result.ok)throw new Error("Provider rejected request");return NextResponse.json({message:"Thanks for subscribing!"});}
 catch{return NextResponse.json({message:"We couldn't complete your subscription right now."},{status:502});}
}
