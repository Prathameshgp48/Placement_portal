import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.port || 8000, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

    app.on("error", (error) => {
      console.log("Err:", err);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED!!", err);
  });
