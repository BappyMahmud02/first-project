import { academicSemisterNameCodeMapper } from './academicSemister.constant';
import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

const createAcademicSemisterIntoDB = async (payLoad: TAcademicSemister) => {
  if (academicSemisterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('invalid semister code');
  }

  const result = await AcademicSemister.create(payLoad);
  return result;
};

const getAllAcademicSemisterFromDB = async() =>{
  const result = await AcademicSemister.find();
  return result ;
}

const getSingleAcademicSemisterFromDB = async(id: string)=> {
  const result = await AcademicSemister.findById(id)
  return result ;
}
const updateAcademicSemisterIntoDB = async(id: string, payLoad:Partial<TAcademicSemister>)=>{
  if(payLoad.name &&
    payLoad.code &&
    academicSemisterNameCodeMapper[payLoad.name] !== payLoad.code){
      throw new Error('Invalid semister code')
    }
    const result = await AcademicSemister.findByIdAndUpdate({_id : id}, payLoad,{
      new : true,
    })
    return result ;
}

export const AcademicSemisterService = {
  createAcademicSemisterIntoDB,
  getAllAcademicSemisterFromDB,
  getSingleAcademicSemisterFromDB,
  updateAcademicSemisterIntoDB
};
