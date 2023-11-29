import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z.string().min(1).max(20).trim(),
    middleName: z.string().min(0).optional(),
    lastName: z.string().min(1),
  });
  
  const gurdianValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
  });

  const LocalGurdianValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
  });
  
  export const studentValidationSchema = z.object({
    id: z.string().min(1),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAdress: z.string().min(1),
    parmanentAdress: z.string().min(1),
    gurdian: gurdianValidationSchema,
    localGurdian: LocalGurdianValidationSchema,
    profileImage: z.string().optional(),
    isActive: z.enum(['active', 'block']).default('active'),
  });

  export default studentValidationSchema;
  