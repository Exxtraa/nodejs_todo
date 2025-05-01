import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "apishit",
    })
    .then(() => console.log("Databse Connected"))
    .catch((e) => console.log(e));
};
