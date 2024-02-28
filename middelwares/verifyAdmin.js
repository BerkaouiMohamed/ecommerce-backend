    

  const isAdmin =(req,res,next)=>{  
    
    if((req.headers.role)!="admin"){
        return next('not admin')
    }
    next()}
  
    module.exports=isAdmin