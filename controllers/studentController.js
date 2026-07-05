import { Student } from '../models/student.js';



export const createStudent = async (req, res) => {
  try {
    const { name, age, email, grade } = req.body;

    const student = await Student.create({
      name,
      age,
      email,
      grade
    });
     console.log("Student created:", student);
    res.status(201)
    .json({
      message: "Student created successfully",
      student
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const { name, age, email, grade } = req.query;

    // Build filter object dynamically
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" }; // case-insensitive search
    }

    if (age) {
      filter.age = age;
    }

    if (email) {
      filter.email = { $regex: email, $options: "i" };
    }

    if (grade) {
      filter.grade = grade;
    }

    const students = await Student.find(filter);

    res.status(200).json({
      message: "Students fetched successfully",
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editStudent = async (req, res) => {
  try {
    const { name, age, id } = req.body;

    const student = await Student.findByIdAndUpdate(id, { name, age }, { new: true });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {  
 const { id } = req.body;
  try {
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};