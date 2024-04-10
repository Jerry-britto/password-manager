import React, { useEffect } from "react";
import { useRecord } from "../context";

export const Info = () => {
  const { records,deleteRecord,setOldRecord,setIsUpdating } = useRecord();


  return (
    <div className="overflow-x-auto mx-auto max-w-min" id="info">
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/4 py-4 px-6">Website url</th>
            <th className="w-1/4 py-4 px-6">Username</th>
            <th className="w-1/4 py-4 px-6">Password</th>
            <th className="w-1/4 py-4 px-6">Actions</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">

          {records && records.length!=0? records.map((ele) => (
            <tr key={ele.websiteurl}>
              <td className="border-b py-4 px-6">{ele.websiteurl}</td>
              <td className="border-b py-4 px-6">{ele.username}</td>
              <td className="border-b py-4 px-6">{ele.password}</td>
              <td className="border-b py-4 px-6">
                <button className="bg-green-500 p-1.5 my-1 rounded-lg text-white" onClick={()=>{
                  setIsUpdating(true);
                  setOldRecord(ele)
                  }}>Update</button>
                <button className="bg-red-500 p-1.5 my-1 rounded-lg text-white" onClick={()=>deleteRecord(ele.websiteurl)}>Delete</button>
              </td>
            </tr>
          )):<tr><td>Nothing to show</td></tr>}
        </tbody>
      </table>
    </div>
  );
};
