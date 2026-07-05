import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

export const Teacher = mongoose.model('Teacher', teacherSchema)