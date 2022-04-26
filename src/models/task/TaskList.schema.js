import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        minlength: [3, 'Needs to be more than 3 characters']
    },
    hr: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('Task', TaskSchema);