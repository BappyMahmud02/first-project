export type UserNAme = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserNAme;
  gender: 'male' | 'Female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAdress: string;
  parmanentAdress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImage?: string;
  isActive: 'active' | 'block';
};
