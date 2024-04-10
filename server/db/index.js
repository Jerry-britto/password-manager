import mongoose from "mongoose"

const connectToDb = async()=> {
    try {
        const connectToDbInstance = await mongoose.connect(`${process.env.MONGO_URI}password-manager`);
        console.log(`DB Connected successfully !! DB HOST: ${connectToDbInstance.connection.host}`);
    } catch (error) {
        console.log(`Error while connecting to db due to ${error.message}`)
        process.exit(1)
    }
}

export default connectToDb;