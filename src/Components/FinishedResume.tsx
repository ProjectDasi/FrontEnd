import React from 'react';

// FinishedResume Props Interface
interface FinishedResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
  userData: UserData;  // userData를 props로 받음
}
interface Resume {
  photo?: string | null;
  name: string;
  address: string;
  phone: string;
  email: string;
  emergencyContact: string;
  emergencyRelationship: string;
  birthDate: string;
  updateDate: string;
}

// Common Fields Interface
type CommonFields = {
  start: string;
  end: string | null;
};

// Work Experience, Certification, Training Interfaces
interface WorkExperience extends CommonFields {
  company: string;
  workDescription: string;
}

interface Certification {
  acquisitionDate?: string | null;
  certificationName?: string | null;
  issuingAuthority: string;
}

interface Training extends CommonFields {
  trainingName: string;
  trainingInstitution: string;
}

// Education Interface (placeholder for now)
interface Education {
  // Define properties if they exist
}

// Main Data Interface
interface UserData {
  resume: Resume;
  workExperience: WorkExperience[];
  certification: Certification[];
  training: Training[];
  education: Education[];
}

const FinishedResume: React.FC<FinishedResumeProps> = ({ onPreClick, onNextClick, userData }) => {
  return (
    <div>
      <div className='h-auto w-[40vw] m-5 border border-gray-200 rounded-xl p-5'>
        <h2 className='text-xl font-bold mb-4'>완성된 이력서</h2>
        <h3 className='font-semibold'>기본 정보</h3>
        <p><strong>이름:</strong> {userData.resume.name}</p>
        <p><strong>연락처:</strong> {userData.resume.phone}</p>
        <p><strong>이메일:</strong> {userData.resume.email}</p>
        <p><strong>주소:</strong> {userData.resume.address}</p>
        <h3 className='font-semibold mt-4'>경력 정보</h3>
      </div>
      <div className='flex justify-center items-center'>
        <button 
          type="button" 
          className="mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57]"
          onClick={onPreClick}
        >
          돌아가기
        </button>
        <button 
          type="button" 
          className="ml-4 mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57]"
          onClick={onNextClick}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default FinishedResume;
