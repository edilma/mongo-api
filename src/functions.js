import { dbConnect } from "./dbConnect.js";

const collectionName= process.env.COLLECTION
//getAll
export async function getAllDoc (req, res){
    const db= dbConnect();
    const collection = await (await (await db.collection(collectionName).find({}).limit(10).toArray()));
    console.table(collection)
    res.send(collection)
}

//search
export async function findDoc(req, res ) {
    const {search} = req.params
    const db= dbConnect();
    const collection = await db.collection(collectionName)
    //check here what happens if i put the number in the search
        .find( {id: search} )
        .toArray();
    console.table(collection);
    res.send (collection);

}

//Delete
export async function deleteDoc (req, res){
    const { docId } = req.params;

    const db = dbConnect();
    const collection = await db.collection(collectionName).deleteOne({id: Number(docId)})

    console.table(collection);
    res.send(collection);
}




//post
export async function postDoc(req, res){
    const newDoc = req.body
    const db = dbConnect();
    await db.collection(collectionName).insertOne(newDoc)
        .catch (err=>{
        res.start(500).send(err)
        return 
    })
    res.status(201).send({message: "New Doc inserted"})

}   