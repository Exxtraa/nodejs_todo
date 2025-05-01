import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "apishit",
    })
    .then((c) => console.log(`Databse Connected ${c.connection.host}`))
    .catch((e) => console.log(e));
};
