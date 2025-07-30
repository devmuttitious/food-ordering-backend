import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlUploadExpress } from "graphql-upload";
import { createApolloServer } from "./graphql/index.js";
import connectDB from "./config/db.js";

dotenv.config();

// Ensure Mongo URI is defined
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not found in .env file.");
  process.exit(1);
}

const app = express();

// CORS
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));


// Connect DB
connectDB();

// Start Apollo Server
const startServer = async () => {
  const server = await createApolloServer();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
};

startServer();
