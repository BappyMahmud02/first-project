import { Schema, model } from 'mongoose';
import {
  TGurdian,
  TStudent,
  TUserName,
  TLocalGurdian,
  studentModel,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    maxlength: [20, 'max allowed length is 20'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalize formate',
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'last is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const LocalGurdianSchema = new Schema<TLocalGurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, studentModel>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  user:{
    type: Schema.Types.ObjectId,
    required: [true,'user id is required'],
    unique: true,
    ref: 'User',
  },
  // password: {
  //   type: String,
  //   required: [true,'password is required'],
  //   maxlength:[20,'password can not be more than 20']
  // },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAdress: { type: String, required: true },
  parmanentAdress: { type: String, required: true },
  gurdian: {
    type: gurdianSchema,
    required: true,
  },
  localGurdian: {
    type: LocalGurdianSchema,
    required: true,
  },
  profileImage: { type: String },

});
// creating a custom instance method

export const Student = model<TStudent>('Student', studentSchema);
