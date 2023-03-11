
const express=require('express');
const router=express.Router();

//---------------------requiring the route handlers---------------------------
const {createUser,getUser,updateUser,deleteUser}=require('../controllers/userController')



//-------------------------post API------------------------------
router.post('/users',createUser);

//------------------------get API--------------------------------
router.get('/users',getUser)

//-----------------------put API-----------------------------------
router.put('/users/:userId',updateUser)

//-----------------------delete API
router.delete('/users/:userId',deleteUser)


//---------------------exporting the router--------------------
module.exports=router