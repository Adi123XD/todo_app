import { app } from "./app.js";
import { connectDB } from "./connect/database.js";

// connecting to database
connectDB()
// console.log(process.env.PORT,process.env.MONGO_URI)
// server listening on a port
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
  });
  