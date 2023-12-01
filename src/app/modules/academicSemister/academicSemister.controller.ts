import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemisterService } from './academicSemister.Service';

const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await AcademicSemisterService.createAcademicSemisterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created succesfully',
    data: result,
  });
});

const getAllAcademicSemister = catchAsync(async (req, res) => {
  const result = await AcademicSemisterService.getAllAcademicSemisterFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created succesfully',
    data: result,
  });
});

const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result =
    await AcademicSemisterService.getSingleAcademicSemisterFromDB(semisterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is retrive succesfully',
    data: result,
  });
});

const updateAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result = await AcademicSemisterService.updateAcademicSemisterIntoDB(
    semisterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is retrive succesfully',
    data: result,
  });
});

export const AcademicSemisterControllers = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
