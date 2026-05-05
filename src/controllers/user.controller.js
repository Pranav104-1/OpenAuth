import dotenv from dotenv;
import {User} from "../models/user.model.js";
dotenv.config();



export const Login = async(req,res) =>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: "Please provide both username and password"});
    }

    const UserFinder = await User.findOne({username});
    if(!UserFinder){
        return res.status(404).json({message: "User not found"});
    }

}