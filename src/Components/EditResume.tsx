import React, { Fragment } from 'react';
import SampleResume from '../Data/resumeSample.json';

// Props Interface
interface EditResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
  userData: UserData;
  setUserData: (updatedData: UserData) => void;
}

// Resume Interface
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
interface WorkExperience {
  workStart: string | null;
  workEnd: string | null;
  company: string;
  workDescription: string;
}

interface Certification {
  acquisitionDate?: string | null;
  certificationName?: string | null;
  issuingAuthority: string;
}

interface Training {
  trainingStart: string | null;
  trainingEnd: string | null;
  trainingName: string;
  trainingInstitution: string;
}

// Education Interface (placeholder for now)
interface Education {
  educationStart: string | null;
  educationEnd: string | null;
  schoolName: string;
  major: string;
}

// Main Data Interface
interface UserData {
  resume: Resume;
  workExperience: WorkExperience[];
  certification: Certification[];
  training: Training[];
  education: Education[];
}

const EditResume: React.FC<EditResumeProps> = ({ onPreClick, onNextClick, userData, setUserData }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, section: string) => {
    const { name, value } = e.target;
    
    // Check if the field belongs to the resume
  //   if (['name', 'phone', 'birthDate', 'email', 'address', 'emergencyContact', 'emergencyRelationship', 'updateDate'].includes(name)) {
  //     setUserData({
  //       ...userData,
  //       resume: {
  //         ...userData.resume,
  //         [name]: value,
  //       },
  //     });
  //   }
  //   // Check if the field belongs to workExperience
  //   else if (['workstart', 'workend', 'company', 'workDescription'].includes(name)) {
  //     setUserData({
  //       ...userData,
  //       workExperience: userData.workExperience.map((work, index) => {
  //         if (index === 0) {
  //           // Only update the first workExperience entry
  //           return {
  //             ...work,
  //             [name]: value,
  //           };
  //         }
  //         return work;
  //       }),
  //     });
  //   }
  //   // Check if the field belongs to training
  //   else if (['trainingstart', 'trainingend', 'trainingName', 'trainingInstitution'].includes(name)) {
  //     setUserData({
  //       ...userData,
  //       training: userData.training.map((training, index) => {
  //         if (index === 0) {
  //           // Only update the first training entry
  //           return {
  //             ...training,
  //             [name]: value,
  //           };
  //         }
  //         return training;
  //       }),
  //     });
  //   }
  //       // Certification
  //       else if (['acquisitionDate', 'certificationName', 'issuingAuthority'].includes(name)) {
  //         setUserData({
  //           ...userData,
  //           certification: userData.certification.map((cert, index) => {
  //             if (index === 0) {
  //               return {
  //                 ...cert,
  //                 [name]: value,
  //               };
  //             }
  //             return cert;
  //           }),
  //         });
  //       }

  //       // Education
  //   else if (['educationstart', 'educationend', 'schoolName', 'major'].includes(name)) {
  //     setUserData({
  //       ...userData,
  //       education: userData.education.map((edu, index) => {
  //         if (index === 0) {
  //           return {
  //             ...edu,
  //             [name]: value,
  //           };
  //         }
  //         return edu;
  //       }),
  //     });
  //   }
  //   // Similarly, you can add conditions for certification and education if needed
  //   console.log(userData);
  // };

  if (section === 'resume') {
    setUserData({
      ...userData,
      resume: {
        ...userData.resume,
        [name]: value,
      },
    });
  }
  // Update work experience
  else if (section === 'workExperience') {
    setUserData({
      ...userData,
      workExperience: userData.workExperience.map((work, i) =>
        i === index ? { ...work, [name]: value } : work
      ),
    });
  }
  // Update training
  else if (section === 'training') {
    setUserData({
      ...userData,
      training: userData.training.map((training, i) =>
        i === index ? { ...training, [name]: value } : training
      ),
    });
  }
  // Update certification
  else if (section === 'certification') {
    setUserData({
      ...userData,
      certification: userData.certification.map((cert, i) =>
        i === index ? { ...cert, [name]: value } : cert
      ),
    });
  }
  // Update education
  else if (section === 'education') {
    setUserData({
      ...userData,
      education: userData.education.map((edu, i) =>
        i === index ? { ...edu, [name]: value } : edu
      ),
    });
  }
};
  

  return (
    <div className='w-full Gamtan'>
      <div className='w-full flex justify-center items-center'>
        <div className='m-5 border border-gray-200 rounded-xl p-5'>
          <Fragment>
            <table className='w-full'>
              <tbody>
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    기본정보
                  </th>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">이름</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="name"
                      value={userData.resume.name}
                      onChange={(e) => handleInputChange(e, 0, 'resume')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="phone"
                      value={userData.resume.phone}
                      onChange={(e) => handleInputChange(e, 0, 'resume')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">생년월일</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="birthDate"
                      value={userData.resume.birthDate}
                      onChange={(e) => handleInputChange(e, 0, 'resume')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">Email</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="email"
                      name="email"
                      value={userData.resume.email}
                      onChange={(e) => handleInputChange(e, 0, 'resume')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                </tr>
                <tr className="border-y border-gray-200">
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    경력사항
                  </th>
                </tr>
                {userData.workExperience.map((work, index) => (
                  <Fragment key={index}>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    근무기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="workstart"
                      placeholder={work.workStart || ''}
                      value={work.workStart || ''}
                      onChange={(e) => handleInputChange(e, index, 'workExperience')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center">
                    ~
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="workend"
                      placeholder={work.workEnd || ''}
                      value={work.workEnd || ''}
                      onChange={(e) => handleInputChange(e, index, 'workExperience')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    근무처
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="company"
                      placeholder={work.company}
                      value={work.company}
                      onChange={(e) => handleInputChange(e, index, 'workExperience')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">업무내용</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="workDescription"
                      placeholder={work.workDescription}
                      value={work.workDescription}
                      onChange={(e) => handleInputChange(e, index, 'workExperience')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                </Fragment>
                ))}
                <tr className="border-y border-gray-200">
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    훈련사항
                  </th>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    훈련기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingstart"
                      placeholder={userData.training[0]?.trainingStart ?? ''}
                      value={userData.training[0]?.trainingStart ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingend"
                      placeholder={userData.training[0]?.trainingEnd ?? ''}
                      value={userData.training[0]?.trainingEnd ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-gray-200'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    훈련명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingName"
                      placeholder={userData.training[0]?.trainingName}
                      value={userData.training[0]?.trainingName}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">훈련기관</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingInstitution"
                      placeholder={userData.training[0]?.trainingInstitution}
                      value={userData.training[0]?.trainingInstitution}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                {/* 자격증 input */}
                <tr className="border-y border-gray-200">
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    자격•면허•수상사항
                  </th>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    취득일
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="acquisitionDate"
                      placeholder={userData.certification[0]?.acquisitionDate ?? ''}
                      value={userData.certification[0]?.acquisitionDate ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingend"
                      placeholder={userData.training[0]?.end ?? ''}
                      value={userData.training[0]?.end ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 text-center"
                    />
                  </td> */}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-gray-200'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    자격•면허/수상 사항
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="certificationName"
                      placeholder={userData.certification[0]?.certificationName ?? ''}
                      value={userData.certification[0]?.certificationName ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">시행처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="issuingAuthority"
                      placeholder={userData.certification[0]?.issuingAuthority ?? ''}
                      value={userData.certification[0]?.issuingAuthority ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className="border-y border-gray-200">
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    학력사항
                  </th>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    교육기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="educationstart"
                      placeholder={userData.education[0]?.educationStart ?? ''}
                      value={userData.education[0]?.educationStart ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="educationend"
                      placeholder={userData.education[0]?.educationEnd ?? ''}
                      value={userData.education[0]?.educationEnd ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-gray-200'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    학교명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="schoolName"
                      placeholder={userData.education[0]?.schoolName ?? ''}
                      value={userData.education[0]?.schoolName ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">전공분야</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="major"
                      placeholder={userData.education[0]?.major ?? ''}
                      value={userData.education[0]?.major ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          type="button"
          className="mb-4 block rounded-md bg-white px-3 py-2 text-center text-lg GamtanBold text-[#2A9BDC] border-2 border-[#2A9BDC] shadow-sm hover:bg-[#2a9bdc] hover:text-white"
          onClick={onPreClick}
        >
          돌아가기
        </button>
        <button
          type="button"
          className="ml-4 mb-4 block rounded-md bg-white px-3 py-2 text-center text-lg GamtanBold text-[#2A9BDC] border-2 border-[#2A9BDC] shadow-sm hover:bg-[#2a9bdc] hover:text-white"
          onClick={onNextClick}
        >
          제출하기
        </button>
      </div>
    </div>
  );
};

export default EditResume;
