import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path"
import bodyParser from "body-parser";





dotenv.config()


connectDB();


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(  ))
app.use(express.json())



app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


app.get('/', (req,res) => {
    res.send({
        message:'welcome'
    })
})

const PORT = 8080


app.listen(PORT, () => {
    console.log(`listning port http://localhost:${PORT}`);
  });