import {ApiError} from "../error/apiError.js";

export const errorHandler =  (err,req,res,next)=>{
    // Если есть static метод
    if(err instanceof ApiError){
        return res.status(err.status).json({message:err.message})
    }
    return res.status(500).json({message:"Непредвиденная ошибка"})
}