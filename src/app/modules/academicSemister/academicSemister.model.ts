import { Schema, model, } from "mongoose";
import { TAcademicSemister, } from "./academicSemister.interface";
import { AcademicSemisterCode, AcademicSemisterName, Months } from "./academicSemister.constant";




const academicSemisterSchema = new Schema<TAcademicSemister>({
    name: {type: String, required: true,enum: AcademicSemisterName},
    year: {type: String, required: true},
    code : {type: String, required: true, enum: AcademicSemisterCode},
    starMonth: {type:String , enum:Months,},
    endMonth: {type:String , enum:Months,},
   
},
{
    timestamps: true
})

export const AcademicSemister = model<TAcademicSemister>('AcademicSemister',academicSemisterSchema)