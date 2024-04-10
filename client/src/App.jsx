import React, { useEffect, useState } from "react";
import { RecordProvider } from "./context";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Info } from "./components/Info.jsx";

const App = () => {
  const [records, setRecords] = useState([]);
  // for updation of record
  const [oldRecord, setOldRecord] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const addRecord = async (data) => {
    setRecords((prev) => [...prev, data]);
    try {
      const res = await Axios.post("http://localhost:4000/api/addrecord", data);
      if (res.status != 200) {
        throw Error(res.data.message);
      }
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.message);
      toast.error("Kindly provide unique details");
    }
  };
  useEffect(() => {
    getRecord();
  }, [records]);

  const updateRecord = async (oldwebsiteurl, data) => {
    try {
      const res = await Axios.put(
        `http://localhost:4000/api/updaterecord?websiteurl=${oldwebsiteurl}`,
        data
      );
      if (res.status == 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Your record was not updated");
    }
  };

  const getRecord = async () => {
    const res = await Axios.get("http://localhost:4000/api/getrecords");
    setRecords(res.data.data);
  };
  const deleteRecord = async (websiteurl) => {
    console.log(websiteurl);
    try {
      const res = await Axios.delete(
        `http://localhost:4000/api/deleterecord?websiteurl=${websiteurl}`
      );
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Your record was not deleted");
    }
  };

  return (
    <div className="bg-green-200">
      <RecordProvider
        value={{
          records,
          addRecord,
          updateRecord,
          deleteRecord,
          oldRecord,
          setOldRecord,
          isUpdating,
          setIsUpdating,
        }}
      >
        <Navbar />
        <Form />
        <Info />

        <ToastContainer />
      </RecordProvider>
    </div>
  );
};

export default App;
