// import { Student } from './student.interface';
import { Request, Response } from 'express';
import { studentService } from './student.servic';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'student created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'student retrived succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is retrived succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
