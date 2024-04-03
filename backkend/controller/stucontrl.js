import studentModel from "../models/students.js";

export const create = async (req, res) => {
  try {
    const studentData = new studentModel(req.body);
    if (!studentData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    const saveddatag = await studentData.save();
    res.status(200).json({ msg: "Insert new student successfully" });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

// fetch all data

export const getStu = async (req, res) => {
  try {
    const StuData = await studentModel.find();
    if (!StuData) {
      return res.status(400).json({ msg: "Student data not found  " });
    } else {
      res.status(200).json(StuData);
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

// get one student

export const getStuone = async (req, res) => {
  try {
    const id = req.params.id;
    const stuExist = await studentModel.findById(id);
    if (!stuExist) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json(stuExist);
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};

// update student data

export const ubdateStu = async (req, res) => {
  try {
    const id = req.params.id;
    const studentExist = await studentModel.findById(id);
    if (!studentExist) {
      return res.status(404).json({ msg: "student not found" });
    } else {
      const updateStudent = await studentModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({ msg: "Update student successfully" });
    }
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};

// delete student  data

export const deleteStu = async (req, res) => {
  try {
    const id = req.params.id;
    const StuExist = await studentModel.findById(id);
    if (!StuExist) {
      return res.status(404).json({ msg: "student not exist" });
    }
    await studentModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (err) {
    return res.status(500).json({ err: err });
  }
};

// find student by name

export const findByname = async (req, res) => {
  try {
    const { name } = req.query;
    const studentData = await studentModel.find({
      stuname: { $regex: name, $options: "i" },
    });
    res.json(studentData);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
