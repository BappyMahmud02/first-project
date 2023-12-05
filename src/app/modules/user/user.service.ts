import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemister } from '../academicSemister/academicSemister.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { genarateStudentId } from './user.utils';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password

  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // find academic semister info

  const admissionSemister = await AcademicSemister.findById(
    payLoad.admissionSemister,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction()
    // set manually generated it
    userData.id = await genarateStudentId(admissionSemister!);

    // create a user(transaction 1)
    const newUser = await User.create([userData],{session});

    // create a student
    if (!newUser.length) {

      throw new AppError(httpStatus.BAD_REQUEST,'Faild to create user')

      // set id, _id as a user
      payLoad.id = newUser[0].id;
      payLoad.user = newUser[0]._id;
    }

    const newStudent = await Student.create([payLoad], {session});

    if(!newStudent.length){
      throw new AppError(httpStatus.BAD_REQUEST,'Faild to create student')

    }

    await session.commitTransaction()
    await session.endSession()
    return newStudent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction()
    await session.endSession();
    throw new Error(err)
  }
};

export const USerService = {
  createStudentIntoDB,
};
