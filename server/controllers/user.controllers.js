import { Record } from "../models/user.models.js";

// adding a new record
const addNewRecord = async (req, res) => {
  try {
    const { websiteurl, username, password } = req.body; // accepting data
    if (!websiteurl || !username || !password) {
      // empty data validations
      throw new Error("Kindly fill in your details");
    }

    //unique user
    const recordExists = await Record.findOne({ websiteurl });
    if (recordExists) {
      throw new Error("User already exists");
    }

    // saving details to db
    const user = await Record.create({
      websiteurl,
      username: username.toLowerCase(),
      password,
    });

    if (!user) {
      throw new Error("User not created");
    }

    res.json({
      success: true,
      message: "User added successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// retrieving all the records
const getRecords = async (_, res) => {
  try {
    const records = await Record.find({});
    if (!records) {
      throw new Error("Data does not exist");
    }
    console.log(records);
    res.status(200).json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete specific record
const deleteRecord = async (req, res) => {
  try {
    const {websiteurl} = req.query;
    console.log(websiteurl);
    if(!websiteurl){
      throw Error("Kindly provide a website url");
    }
    const isExists = await Record.findOne({ websiteurl });
    if (!isExists) {
      throw new Error("Record does not exist");
    }
    const deleteRecordData = await Record.findOneAndDelete({ websiteurl });
    res
      .status(200)
      .json({ success: true, message: "Deleted data", deleteRecordData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateRecord = async (req, res) => {
  try {
    const newData = req.body;
    const { websiteurl } = req.query;
    if (!websiteurl) {
      throw new Error("Kindly provide your website url");
    }
    if (!newData) {
      throw new Error("Kindly enter your details to be updated");
    }
    const userExists = await Record.findOne({ websiteurl });
    if (!userExists) {
      throw new Error("User does not exist");
    }
    Object.assign(userExists, newData);
    const updatedUser = await userExists.save();
    res.status(200).json({
      success: true,
      message: "User has being updated successfully",
      newUser: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addNewRecord, getRecords, deleteRecord, updateRecord };
