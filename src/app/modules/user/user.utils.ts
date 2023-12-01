// year semisterCode 4digit number

import { TAcademicSemister } from '../academicSemister/academicSemister.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const genarateStudentId = async (payLoad: TAcademicSemister) => {
  let currentId = (0).toString(); //0000by default

  const lastStudentId = await findLastStudentId();
  const lastStudentSemisterCode = lastStudentId?.substring(4,6) //01 
  const lastStudentYear = lastStudentId?.substring(0,4) //2030
  const currentSemisterCode = payLoad.code ;
  const currentYear = payLoad.year

    if(lastStudentId && lastStudentSemisterCode === currentSemisterCode && lastStudentYear === currentYear){
    currentId = lastStudentId.substring(6)
    }


  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return incrementId;
};
