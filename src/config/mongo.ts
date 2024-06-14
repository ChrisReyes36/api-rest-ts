import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI;
    const conn = await connect(DB_URI);
    console.log(`MongoDB connected: ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect;