import config from "../../config";
import { AcademicSemister } from "../academicSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { genarateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string ,payLoad: TStudent) => {

     // create a user object
     const userData: Partial<TUser> = {}

    // if password is not given, use default password

    userData.password = password || (config.default_password as string)

    // set student role
    userData.role = 'student'


  // find academic semister info 

  const admissionSemister = await AcademicSemister.findById(payLoad.admissionSemister)


    // set manually generated it
    userData.id = await genarateStudentId(admissionSemister);

    
    // create a user
    const newUser = await User.create(userData);

    // create a student
    if(Object.keys(newUser).length){
        // set id, _id as a user
        payLoad.id = newUser.id;
        payLoad.user = newUser._id
    }

    const newStudent = await Student.create(payLoad)
    return newStudent
  };

  export const USerService = {
    createStudentIntoDB
  }