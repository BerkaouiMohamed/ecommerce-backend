const jwt=require('jsonwebtoken')
const verifytoken=async (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization
    if (!token) {
        return next('no token')
    }
    const vtoken = token.split(' ')[1]
      await jwt.verify(vtoken,process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
           return next('invalid token')
        }
        else {
          console.log(decoded);
           req.headers.role=decoded.role
           req.headers._id= decoded.id
            next()
        }
    }) 
  }
  module.exports=verifytoken
  