

const userModel = require('../models/userModel.js');
const currentData=require('../models/userModel.js')

//-----------------isValid functions------------------
const isValid = function(value){
    if (typeof value ==='undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
  }


//-------------------------createUser--------------
const createUser= async function(req,res){
    try {
    let data = req.body;
    let {gender, dob, city, state, pincode} = data;

    if (!isValid(state)) {
      return res.status(400).send({ msg: "email is required" });
    }
   
    if (!isValid(pincode)) {
      return res.status(400).send({ msg: "pinCode is required" });
    }

    if (!isValid(city)) {
      return res.status(400).send({ msg: "city is required" });
    }

    let gender1 = ['male', 'female'];
    if(!gender1.includes(gender)) return res.status(400).send({ status: false, msg: "gender should be male or female only" });


    let validDob=/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
    if(!validDob.test(dob)){
        return res.status(400).send({message:"invalid dob"})
    }
    
    let userdata=await userModel.create(req.body);
    console.log(userdata)
    res.status(201).send({ message: userdata, status: true });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};


//--------------------getUser---------------------
const getUser=async function(req,res){
    let data=await userModel.find();
    res.status(200).send({data:data})
}

//--------------------updateUser---------------------
const updateUser = async function (req, res) {
    
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.send("No such user exists");
      }
    
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
      res.status(204).send({ status: true, data: updatedUser });
    };

//----------------------deleteUser----------------------

const deleteUser=async function(req,res){
    try {
        await userModel.findByIdAndDelete(req.params.userId);
        res.status(200).json("userModel has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}

//---------------exporting the files-------------------
module.exports ={createUser,getUser,updateUser,deleteUser}
