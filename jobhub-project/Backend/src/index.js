import dotenv from "dotenv";
import connectDB from "./configs/Database.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()    
  .then(() => {
    try {
      app.listen(process.env.PORT || 8000, () =>
        console.log(`Server is running at ${process.env.PORT}`)
      );
    } catch (error) {
      console.error("Server not running !!", error);
    }
  })
  .catch((err) => console.log("MONGODB Connection failed!!", err));
