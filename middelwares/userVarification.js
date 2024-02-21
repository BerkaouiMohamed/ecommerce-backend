const {body}=require('express-validator')
function userVerification(){
    return [body('email').isEmail(),body('password').notEmpty()]
}
module.exports=userVerification