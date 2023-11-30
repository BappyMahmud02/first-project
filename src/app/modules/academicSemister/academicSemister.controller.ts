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

export const AcademicSemisterControllers = {
  createAcademicSemister,
};
