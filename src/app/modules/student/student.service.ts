import { startSession } from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import { TStudent } from './student.interface';

const getAllStudentsFromDB = async (query : Record<string,unknown>) => {

  let searchTerm = '' ;
  if(query?.searchTerm){
    searchTerm = query?.searchTerm as string
  }

  const result = await Student.find({
    $or: ['email','name.firstName','presentAdress'].map((field) => ({
      [field]: {$regex: searchTerm, $options: 'i'}
    }))
  })
    .populate('admissionSemister')
    .populate({
      path: 'academicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return result;
};

 
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemister')
    .populate({
      path: 'academicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return result;
};

const updateStudentIntoDb = async (id: string, payLoad:Partial<TStudent> ) => {

const {name, gurdian, localGurdian, ...remainingStudentData}= payLoad

  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingStudentData,
  }

  if(name && Object.keys(name).length){
    for(const [key,value] of Object.entries(name)){
      modifiedUpdateData[`name.${key}`] = value ;
    }
  }

  if(gurdian && Object.keys(gurdian).length){
    for(const [key,value] of Object.entries(gurdian)){
      modifiedUpdateData[`gurdian.${key}`] = value ;
    }
  }
  if(localGurdian && Object.keys(localGurdian).length){
    for(const [key,value] of Object.entries(localGurdian)){
      modifiedUpdateData[`localGurdian.${key}`] = value ;
    }
  }



  const result = await Student.findOneAndUpdate({id}, modifiedUpdateData,{ new: true, runValidators: true} )

  return result
}

const deleteStudentFromDB = async (id: string) => {
  const session = await startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Fails to create student')
  }
};

export const studentService = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentFromDB,
  updateStudentIntoDb
};
