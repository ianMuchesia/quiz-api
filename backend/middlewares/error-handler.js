const errorHandlerMiddleware = async(err,req,next)=>{
    console.log(err)
    return res.status(500).json({msg:"Something wrong happened try again later"})
}

export default errorHandlerMiddleware