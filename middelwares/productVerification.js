const {body}=require('express-validator')
function productVerification(){
    return [body('title').isLength({min:3}),body('price').notEmpty().isInt({min:50,max:100000000})]
}
module.exports=productVerification