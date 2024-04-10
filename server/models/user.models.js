import mongoose, { Schema } from "mongoose";

const recordSchema = new Schema(
  {
    websiteurl: {
      type: String,
      required: [true,"Website url is mandatory"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    username:{
        type: String,
        required: [true,"Username is mandatory"],
        unique: true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true,
        min:[3,"Min limit should be 3 for setting up your password"],
        max:[10,"Max limit of the password should be 10"]
    }
  },
  { timestamps: true }
);

export const Record = mongoose.model("Record",recordSchema)
