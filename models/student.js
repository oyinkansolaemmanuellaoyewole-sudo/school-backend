import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is requires"],
        validate: {
            validator: validator.isEmail,
            message: "Please get a valid address"
        }
    },
    grade: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Student = mongoose.model('Student', studentSchema)