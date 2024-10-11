import React, { Fragment, useState } from 'react';
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

const EditResume: React.FC<EditResumeProps> = ({ onPreClick, onNextClick, userData, setUserData  }) => {
  // `userData` 상태를 초기화
  const [userData, setUserData] = useState<UserData>({
    resume: SampleResume.resume,
    workExperience: SampleResume.workExperience.map((work) => ({
      start: work.workStart, // Map `workStart` to `start`
      end: work.workEnd,     // Map `workEnd` to `end`
      company: work.company,
      workDescription: work.workDescription,
    })),
    certification: SampleResume.certification,
    training: SampleResume.training.map((training) => ({
      start: training.trainingStart,
      end: training.trainingEnd,
      trainingName: training.trainingName,
      trainingInstitution: training.trainingInstitution,
    })),
    education: SampleResume.education,
  });

  // 데이터를 업데이트하는 함수
  // const updateName = (newName: string) => {
  //   setUserData((prevState: UserData) => ({
  //     ...prevState,
  //     resume: {
  //       ...prevState.resume,
  //       name: newName,
  //     },
  //   }));
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // `setUserData`를 사용하여 상태를 업데이트
    setUserData((prevState) => ({
      ...prevState,
      resume: {
        ...prevState.resume,
        [name]: value,  // name 필드에 맞게 value를 설정
      },
      // 다른 필드들 (workExperience, certification 등)은 변경되지 않음
    }));
  };
  

  
  
  return (
    <div className='w-full Gamtan'>
      <div className='w-full flex justify-center items-center'>
        <div className='m-5 border border-gray-200 rounded-xl p-5'>
          <Fragment>
            <table className='w-full'>
              <tbody>
              <tr className="border-y border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        기본정보
                      </th>
                    </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    이름
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="name"
                      placeholder={userData.resume.name}
                      value={userData.resume.name}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="phone"
                      placeholder={userData.resume.phone}
                      value={userData.resume.phone}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"></td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    생년월일
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="birthDate"
                      placeholder={userData.resume.birthDate}
                      value={userData.resume.birthDate}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">Email</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="email"
                      name="email"
                      placeholder={userData.resume.email}
                      value={userData.resume.email}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"></td>
                </tr>
                <tr className="border-y border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        이력
                      </th>
                    </tr>
                    <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    근무기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                  <input
                      type="text"
                      name="workstart"
                      placeholder={userData.workExperience[0]?.start}
                      value={userData.workExperience[0]?.start}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 text-center"
                    />                    
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">
                  ~ 
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                  <input
                      type="text"
                      name="workend"
                      placeholder={userData.workExperience[0]?.end ?? ''}
                      value={userData.workExperience[0]?.end ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 text-center"
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
                      placeholder={userData.workExperience[0]?.company}
                      value={userData.workExperience[0]?.company}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">업무내용</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                  <input
                      type="text"
                      name="workDescription"
                      placeholder={userData.workExperience[0]?.workDescription}
                      value={userData.workExperience[0]?.workDescription}
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
                        훈련
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
                      placeholder={userData.training[0]?.start ?? ''}
                      value={userData.training[0]?.start ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 text-center"
                    />
                    </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                  <input
                      type="text"
                      name="trainingend"
                      placeholder={userData.training[0]?.end ?? ''}
                      value={userData.training[0]?.end ?? ''}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 text-center"
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
              </tbody>
            </table>
          </Fragment>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          type="button"
          className="mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
          onClick={onPreClick}
        >
          돌아가기
        </button>
        <button
          type="button"
          className="ml-4 mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
          onClick={onNextClick}
        >
          제출하기
        </button>
      </div>
    </div>
  );
};

export default EditResume;
