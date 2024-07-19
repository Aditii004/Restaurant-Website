
import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import app from "./app.js"; // Ensure this is an Express instance

dotenv.config();

// Connect to the database
dbConnection();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



