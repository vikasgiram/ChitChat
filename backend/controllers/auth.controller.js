import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup=async (req,res)=>{
    try {
        const{name, username, password, confirmpassword, gender}=req.body;
        if(password !== confirmpassword){
            return res.status(400).json({error:"Password don't match"});
        }

        const user= await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        //Hash passwrod here 
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser=new User({
            name,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic: girlProfilePic,
        });

        if(newUser){
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                name:newUser.name,
                username:newUser.username,
                profilePic:newUser.profilePic,
            })
        }else{
            res.status(400).json({error:"Invalid user data"});
        }
    } catch (err) {
        console.log("Error in signing controller: ",err);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const login=(req,res)=>{
    res.send("login");
}

export const logout=(req,res)=>{
    res.send("Logout");
}