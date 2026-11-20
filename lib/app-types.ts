export type PaymentRecord = {
  id: string;
  amount: number;
  currency: string;
  status: string;
  mode: string;
  createdAt: string;
};

export type InterviewRecord = {
  id: string;
  companyName: string;
  designation: string | null;
  date: string;
  time: string;
  location: string;
  status: string;
};

export type CandidateUser = {
  id: string;
  fullName: string;
  email: string;
  profileCompleted: boolean;
  payments: PaymentRecord[];
};

export type CandidateRecord = {
  id: string;
  userId: string;
  user: CandidateUser;
  phone: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  pincode: string | null;
  highestQualification: string | null;
  college: string | null;
  passingYear: string | null;
  skills: string | null;
  selectedJobField: string | null;
  preferredJobField: string | null;
  experience: string | null;
  expIndustry: string | null;
  expJobProfile: string | null;
  expLocation: string | null;
  expQualification: string | null;
  expTotalYears: string | null;
  expPastSalary: string | null;
  expExpectedSalary: string | null;
  status: string;
  interviews?: InterviewRecord[];
  createdAt: string;
  updatedAt: string;
};

export type EmployerRecord = {
  id: string;
  userId: string;
  employerName: string;
  companyName: string;
  phone: string;
  email: string;
  companyAddress: string;
  candidatesRequired: number;
  status: string;
  selectedJobField: string | null;
  preferredJobField: string | null;
  createdAt: string;
  updatedAt: string;
};

export type StoredUser = {
  id?: string;
  fullName?: string;
  email?: string;
  role?: "admin" | "candidate" | "employer" | string;
};
