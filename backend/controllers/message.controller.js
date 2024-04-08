import Convervation from "../models/conversation.model.js"
import Message from "../models/message.model.js";

export const sendMessage= async(req,res)=>{
    try{
        const {message}=req.body;
        const {id: receiverId}=req.params;
        const senderId=req.user._id;

        let convervation=await Convervation.findOne({ participants: {$all: [senderId, receiverId]}});

        if(!convervation){
            convervation= await Convervation.create({
                participants: [senderId, receiverId],
            });
        }
        
        const newMessage= new Message({
            receiverId,
            senderId,
            message,
        });


        if(newMessage){
            convervation.message.push(newMessage._id);
        }
        
        // await convervation.save();
        // await newMessage.save();
        // it save the changes in database in parallel 
        await Promise.all([convervation.save(),newMessage.save()]);

        res.status(201).json(newMessage);

    }catch(err){
        console.log("Error in sendMessage controller: ",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}