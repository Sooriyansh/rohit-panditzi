import "server-only";
import { MongoClient } from "mongodb";
const globalForMongo=globalThis as typeof globalThis & {mongoPromise?:Promise<MongoClient>};
export default function getMongoClient(){const uri=process.env.MONGODB_URI;if(!uri)throw new Error("MONGODB_URI is not configured");const promise=globalForMongo.mongoPromise??new MongoClient(uri).connect();if(process.env.NODE_ENV!=="production")globalForMongo.mongoPromise=promise;return promise;}
