

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


    let validDob=/^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
    if(!validDob.test(dob)){
        return res.status(400).send({message:"invalid dob"})
    }
    
    let userdata=await userModel.create(data);
    res.status(201).send({ data: userdata, status: true });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};


//--------------------getUser---------------------
const getUser=async function(req,res){
    let data=await userModel.find();
    res.send.status(200)({data:data})
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
      res.send.status(204)({ status: updatedUser, data: updatedUser });
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
