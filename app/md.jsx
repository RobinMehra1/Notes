import mongoose from "mongoose";
mongoose
.connect()
.then(() => console.log("Notes database connected successfully!"))
.catch((err) =>
  console.log(`Getting Error from DB connection ${err.message}`)
);
