import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

await mongoose.connect("mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/clase34?retryWrites=true&w=majority");
console.log('DB CONNECTED')

app.listen(3010, () => {
  console.log("Server listening on port 3010");
});

//artillery run config.yml --output testPerformance.json
//artillery report testPerformance.json -o testResults.html