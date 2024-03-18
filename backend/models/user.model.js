import mongoose from "mongoose";

const userSchema=({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum:["male","female","other"]
    },
    profilePic:{
        type:String,
        default:"",
    }
});

export default User=mongoose.model("User",userSchema);