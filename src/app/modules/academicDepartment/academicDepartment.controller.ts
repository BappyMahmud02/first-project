import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentService } from "./academicDepartment.service";
import sendResponse from "../../utils/sendResponse";


const createAcademicDepartment = catchAsync(async (req,res) => {
    const result = await AcademicDepartmentService.createAcademicDepartmentIntoDb(req.body)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department is created successfully',
        data: result ,
    })
})

const getAllAcademicDepartment = catchAsync(async (req,res) => {
    const result = await AcademicDepartmentService.getAllAcademicDepartmentFromDB()
    
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department are retrive successfully',
        data: result ,
    })
})

const getSingleAcademicDepartment = catchAsync(async (req,res) => {
    const { departmentId} = req.params
    const result = await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(departmentId)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department is retrive successfully',
        data: result ,
    })
})

const updateAcademicDepartment = catchAsync(async (req,res) => {
    const {departmentId} = req.params;
    const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(departmentId, req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department is retrive successfully',
        data: result ,
    })
})

export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}

