import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "");

        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected sucessfully");

        console.log(db);
        
        
    } catch (error) {
        console.log("DB Connection Error: ", error);
        process.exit(1);
    }
}

export default dbConnect;