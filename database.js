const { MongoClient } = require("mongodb");
const url =
    "mongodb+srv://pragyanprakhar:SqaIfgVBCY01pbrF@namaste-node.usqfk.mongodb.net/";
const client = new MongoClient(url);
const dbname = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbname);
    const collection = db.collection("User");

    /*  const data = {
        firstname: "Rishabh",
        lastname: "Kumar",
        city: "Bettiah",
    }; */

    //CREATE

    /* const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents =>", insertResult); */

    //UPDATE

    const updateResult = await collection.updateOne(
        { firstname: "Rishabh" },
        { $set: { lastname: "Sinha" } }
    );
    console.log("Updated documents =>", updateResult);

    //READ

    /* const existingDoc = await collection.findOne({ name: "Rishabh" });
    console.log("Existing document =>", existingDoc); */

    // the following code examples can be pasted here...

    //DELETE
    const deleteResult = await collection.deleteMany({ firstname: "Rishabh" });
    console.log("Deleted documents =>", deleteResult);

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
