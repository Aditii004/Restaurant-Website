import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI is not defined in the environment variables.');
    return;
  }

  mongoose.connect(uri, {
    dbName: "Hotelfood",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.error(`An error occurred while connecting to the database: ${err.message}`);
  });
};
