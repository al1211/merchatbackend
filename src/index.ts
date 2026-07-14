import express from "express"
import {  usersrouter } from "./routes/userRoutes.ts";
import { merchatntsrouter } from "./routes/merchantRoutes.ts";

const app=express();


app.use(express.json());

app.use("/api/v1/user",usersrouter);
app.use("/api/v1/user",merchatntsrouter);



app.listen(3000,()=>{
    console.log("Server is listen on port 3000")
})