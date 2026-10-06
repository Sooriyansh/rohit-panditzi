import {NextResponse} from "next/server";
import {allServices} from "@/data/services";
import getMongoClient from "@/lib/mongodb";
export const runtime="nodejs";
const phonePattern=/^[+0-9 ()-]{10,18}$/;
const attempts=new Map<string,{startedAt:number;count:number}>();
const rateWindowMs=15*60*1000;
function rateLimit(request:Request){const client=request.headers.get("x-real-ip")??request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()??"unknown";const now=Date.now();let record=attempts.get(client);if(!record||now-record.startedAt>=rateWindowMs){record={startedAt:now,count:0};attempts.set(client,record)}record.count+=1;if(attempts.size>5000){for(const [key,value] of attempts)if(now-value.startedAt>=rateWindowMs)attempts.delete(key)}return record.count>5?Math.ceil((rateWindowMs-(now-record.startedAt))/1000):0;}
export async function POST(request:Request){const retryAfter=rateLimit(request);if(retryAfter>0)return NextResponse.json({error:"बहुत अधिक अनुरोध आए हैं। कृपया कुछ देर बाद फिर प्रयास करें।"},{status:429,headers:{"Retry-After":String(retryAfter)}});let data:Record<string,unknown>;try{data=await request.json() as Record<string,unknown>}catch{return NextResponse.json({error:"कृपया सही जानकारी भरें।"},{status:400})}
const text=(key:string,max:number)=>typeof data[key]==="string"?String(data[key]).trim().slice(0,max):"";
const name=text("name",80),phone=text("phone",18),email=text("email",254),gotra=text("gotra",80),puja=text("puja",80),city=text("city",80),message=text("message",1000),preferredDate=text("preferredDate",10);
const phoneDigits=phone.replace(/\D/g,"");if(name.length<2||!phonePattern.test(phone)||phoneDigits.length<10||phoneDigits.length>15||!allServices.some(s=>s.slug===puja))return NextResponse.json({error:"नाम, सही मोबाइल नंबर और सेवा का चयन आवश्यक है।"},{status:400});
if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:"कृपया सही ईमेल पता दर्ज करें।"},{status:400});
const parsedDate=Date.parse(preferredDate+"T00:00:00.000Z");if(preferredDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)||!Number.isFinite(parsedDate)||new Date(parsedDate).toISOString().slice(0,10)!==preferredDate))return NextResponse.json({error:"कृपया सही तारीख चुनें।"},{status:400});
if(!process.env.MONGODB_URI)return NextResponse.json({error:"बुकिंग सुविधा अभी कॉन्फ़िगर नहीं है। कृपया फोन या ईमेल से संपर्क करें।"},{status:503});
try{const client=await getMongoClient();const result=await client.db(process.env.MONGODB_DATABASE||"ujjain_services").collection("bookings").insertOne({name,phone,email,gotra,puja,preferredDate:preferredDate||null,city,message,status:"pending",createdAt:new Date(),updatedAt:new Date()});return NextResponse.json({ok:true,id:result.insertedId.toString()},{status:201})}catch{return NextResponse.json({error:"अनुरोध सहेजा नहीं जा सका। कृपया फोन से संपर्क करें।"},{status:500})}}
