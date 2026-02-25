const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

// only admin can acess this routes 

router.get("/admin",verifyToken,authorizeRole("admin"),(req,res)=>{
    res.json({massage : "welcome admin"});
});

// both admin and manager can access
router.get("/manager",verifyToken,authorizeRole("admin","manager"),(req,res)=>{
    res.json({massage : "welcome manager"});
});



//all can access this routes 

router.get("/user",verifyToken,authorizeRole("admin","manager" ,"user"),(req,res)=>{
    res.json({massage : "welcome user"});
});

module.exports = router;