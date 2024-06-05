import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
console.log("uri", uri);
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your mogo uri");
}
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
  console.log("i am in the new ", clientPromise);
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
