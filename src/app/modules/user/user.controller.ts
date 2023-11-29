
import { USerService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent  = catchAsync(async (req, res ) => {
  
    // creating a schema validation using zod
    
    const {password, student: studentData } = req.body;
    const result = await USerService.createStudentIntoDB(password, studentData);


    sendResponse(res,{
      statusCode : httpStatus.OK,
      success : true,
      message : 'student is created succesfullt',
      data : result,
    });
  
})

 export const UserControllers = {
    createStudent
  }