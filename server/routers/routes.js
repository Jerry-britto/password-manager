import express from "express";
import { addNewRecord, deleteRecord, getRecords, updateRecord} from "../controllers/user.controllers.js";
const router = express.Router()


router.post("/addrecord",addNewRecord);

router.get("/getrecords",getRecords)

router.delete("/deleterecord/",deleteRecord)

router.put("/updaterecord/",updateRecord)



export default router;