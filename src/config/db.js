import mongoose from "mongoose";

const mongoClient = () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/classA1')

        if (conn) {
            console.log("MongoDB connected")
        }
    } catch (error) {
        console.log(error)
    }
}

export default mongoClient;