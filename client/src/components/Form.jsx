import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecord } from "../context";
const Form = () => {
  const {addRecord,oldRecord,isUpdating,setIsUpdating,updateRecord} = useRecord()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [oldWEebsieUrl,setOldWebsiteUrl]=useState("")
  const onSubmit = (data,e) => {
    e.preventDefault();
    if(!data) return;
    if(isUpdating){
      // console.log("Your old website url is ",oldWEebsieUrl)
      // console.log("updating your record....")
      // console.log(data);
      updateRecord(oldWEebsieUrl,data)
      setIsUpdating(false);
    }
    else{
      addRecord(data);
      // console.log("Adding your record",data);
    }
}
// useEffect(()=>console.log(oldRecord),[oldRecord])
// useEffect(()=>console.log(isUpdating," chaned value"),[isUpdating])
useEffect(() => {
  setOldWebsiteUrl(oldRecord.websiteurl)
  reset({
    websiteurl: isUpdating ? oldRecord.websiteurl : "",
    username: isUpdating?oldRecord.username:"",
    password: isUpdating?oldRecord.password:"",
  });
}, [isUpdating, oldRecord, reset]);
  return (
    <div className="container mx-auto flex justify-center  items-center h-screen" id="#form">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Website url
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your website url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              {...register("websiteurl",{required:"This is a mandatory field"})}
            />
          </div>
            {errors.websiteurl && <div className="text-red">{errors.websiteurl.message}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="text"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          {isUpdating?<input
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            value="Update record"
          />:<input
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            value="Submit"
          />}
          
        </form>
      </div>
    </div>
  );
};

export default Form;
