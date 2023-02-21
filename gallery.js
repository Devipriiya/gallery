import express from "express";
import connectDB from "./librarydb.js";

import mongoose from "mongoose";
connectDB();
Gallery
const app=express();
app.use(express.json());

const gallery=[{
    image:"image",
    function:"school day",
    name:"By martin andres",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"Basket Ball Event",
    name:"By Abraham costa",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"independance day",
    name:"By Hemprasad",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"sports day",
    name:"By prasanth",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"culture day",
    name:"By joyce",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By shalini",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By shalini",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By Harish",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"culture day",
    name:"By joyce",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By shalini",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By Shalini",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"school day",
    name:"By Harish",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"Basket Ball Event",
    name:"By Abraham costa",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"independence day",
    name:"By HemPrasad",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
},
{
    image:"image",
    function:"sports day",
    name:"By prashanth",
    description:"this image was taken in the year 1999 during the occassion of annual sports event which was held at chennai."
}
]


const gallerySchema=mongoose.Schema(
    {
        image:{
            type:String,
           required:true,
        },            
        function:{
            type:String,
           required:true,
        },            
        name:{
            type:String,
           required:true,
        },            
        description:{
            type:String,
           required:true,
        }          
             
            
           
     })

var Gallery = mongoose.model('Gallery', gallerySchema);
gallerySchema.plugin(Gallery);

app.get("/api/gallery",(req,res) =>
{
    try{
        res.status(200).send(gallery);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
app.post("/api/gallerydetails",async(req,res)=>{
    try{
        const gallery={
            image:req.body.image,
            function:req.body.function,
            name:req.body.name,
            description:req.body.description
           
        }
        console.log(gallery);
        var create=new Gallery(gallery);
        var galleryCreated=await create.save();
      
        if(galleryCreated){
            console.log("created");
        res.status(201).json({message:"show details"});
        }
else{
    res.status(401);
    throw new error("not found");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
app.put('/api/gallery/:id',(req,res)=>{
    console.log(req.params.id);
    Gallery.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            bookname:req.body.bookname,
            category:req.body.category,
            authorname:req.body.authorname,
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_gallery:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    app.delete("/api/gallery/:id",(req,res)=>{
        console.log(req.params.id);
        Gallery.deleteOne({_id:req.params.id},{
            $set:{
               
                bookname:req.body.bookname,
            category:req.body.category,
            authorname:req.body.authorname,
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_library:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        app.delete("/api/gallery",(req,res)=>{
    
            Gallery.deleteMany({gallery},(err,result)=>{
            if(err) throw err
            res.send(gallery)
            })
        })
const port=4000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(gallery);
});