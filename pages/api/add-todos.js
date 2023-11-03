import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://ashishnandvana123:03lov8KAEuiuE9E3@cluster0.kj8xmni.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();
    const todoCollections = db.collection("todos");
    const todo = await todoCollections.insertOne(data);

    console.log(todo);

    res.status(201).json({ message: "todo inserted sucessfully" });
  }
};

export default handler;
