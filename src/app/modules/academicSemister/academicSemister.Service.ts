import { TAcademicSemisterCode } from "./academicSemister.interface";
import { AcademicSemister } from "./academicSemister.model";

const createAcademicSemisterIntoDB = async (payLoad : TAcademicSemisterCode) => {
    
    const result = await AcademicSemister.create(payLoad)
    return result ;
}

export const AcademicSemisterService = {
    createAcademicSemisterIntoDB,
}