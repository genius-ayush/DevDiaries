import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    username : {type: String , required:true } , 
    email: {type: String , required: true , unique: true} , 
    password:{type: String , required:true} , 
} , {timestamps:true})


export const postSchema = new mongoose.Schema({
    title:{title: String , required:true} , 
    content:{type:String , required: true} , 
    summary:{type: String} , 
    author:{type: mongoose.Schema.Types.ObjectId , ref:'User' , required:true} , 
} , {timestamps:true})

export const User = mongoose.model('User' , userSchema) ; 
export const Post = mongoose.model('Post' , postSchema) ; 