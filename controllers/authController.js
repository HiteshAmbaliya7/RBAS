const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


// post register controller 
const register = async(req,res) =>{
    try{
   const {username,password,role} = req.body;
   
   const hashedPassword =await bcrypt.hash(password,10);
   
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists"
      });
    }

   const newUser = new User({username,password:hashedPassword,role});
    
   await newUser.save();
   res.status(201).json({massage :`User registered with username ${username}`});
    }
    catch(err){
      res.status(500)
      .json({massage :`Something want wrong `});  
    }
};

//login post controller
const login = async(req,res) =>{
    try{ 
    const {username,password} = req.body;
    const user = await User.findOne({username});

        if(!user)
        {
            return res.status(404).json({massage : `user with ${username} is not found `})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({massage : `invalid creadentials`})
        }
        const token = jwt.sign(
            {id:user._id,role:user.role}
            ,process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        res.status(200).json({token})

    }catch(err)
    {
        res.status(500)
      .json({massage :`Something want wrong`}); 
    }
    
};

module.exports ={
    register,
    login
}