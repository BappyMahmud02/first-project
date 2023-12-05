import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(async (req, res)=>{
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty is created successfully',
        data: result ,
    })
})

const getAllAcademicFaculties = catchAsync( async (req, res)=> {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB()

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty are retrive successfully',
        data: result ,
    })
})

const getSingleAcademicFaculties = catchAsync(async(req,res) => {
    const {facultyId} = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty is retrive successfully',
        data: result ,
    })
})

const updateAcademicFaculties = catchAsync(async(req,res)=> {
    const {facultyId} = req.params;
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(facultyId,req.body)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty are updated successfully',
        data: result ,
    })
})


export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculties,
    updateAcademicFaculties
}