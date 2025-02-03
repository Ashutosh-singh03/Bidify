import{Auction} from "../models/auctionSchema.js"
import{User} from "../models/userSchema.js"
import {ErrorHandler} from "../middlewares/error.js"
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import {v2 as cloudinary} from "cloudinary";

export const addNewAuctionItem=catchAsyncErrors(async(req ,res ,next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Auction Item  Image Required.", 400));
      }
    
      const { image } = req.files;
    
      const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
      if (!allowedFormats.includes(image.mimetype)) {
        return next(new ErrorHandler("File format not supported.", 400));
      }

    const {
        title,
        desc,
        category,
        condition,
        startingBid,
        startTime,
        endTime,
    }=req.body;
    if( !title ||
        !desc ||
        !category ||
        !condition ||
        !startingBid ||
        !startTime||
        !endTime
    )  {
        return next(new ErrorHandler("Please Provide all details",400 ))
    }

    if(new Date(startTime)<Date.now()){
        return next(new ErrorHandler("Auction cannot start in the past. Choose a valid time.",400))
    }
    if(new Date(startTime)>= new Date(endTime)){
        return next(new ErrorHandler("Auction duration is invalid. End time should be after the start time",400))
    }

    const alreadyOneAuctionActive=await Auction.find({
        createdBy:req.user._id,
        endTime: {$gt :Date.now},
    });

    if(alreadyOneAuctionActive){
        return next(new ErrorHandler("User already Have one Auction",400))
    }
})