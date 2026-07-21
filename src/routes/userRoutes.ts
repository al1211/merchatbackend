import express, { type Request, type Response } from "express"

const userRouter=express.Router();

userRouter.post("/singup",async(req:Request,res:Response)=>{
  try{

    const {name,userName,password}=req.body;
    if(!name || !userName || !password){
        return res.status(401).json({
            message:"Please fill the all feilds"
        })
    };

    const existUser=()=>{}

    

  }catch(err){
    console.log("err",err);
    res.status(500).json({
        message:"Internal server error"
    })
  }
});

userRouter.post("/singin",async(req:Request,res:Response)=>{

})

export const usersrouter=userRouter;