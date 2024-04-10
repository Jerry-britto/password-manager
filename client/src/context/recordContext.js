import { createContext, useContext, useState } from "react";


export const recordContext = createContext({
  records: [],
  addRecord: (data) => {},
  updateRecord: (oldWebsiteUrl,data) => {},
  isUpdating:false,
  setIsUpdating:()=>{},
  deleteRecord: (websiteurl) => {},
});

export const RecordProvider = recordContext.Provider;

export const useRecord = () => {
  return useContext(recordContext);
};
