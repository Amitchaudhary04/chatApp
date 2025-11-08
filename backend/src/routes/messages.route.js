import express from 'express';
const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send(" SendSignup endpoint")});

router.get("/login",(req,res)=>{
    res.send("Send Login endpoint")});

router.get("/logout",(req,res)=>{
    res.send("Send Logout endpoint")});      
    
    
export default router;    