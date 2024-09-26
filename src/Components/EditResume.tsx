import React, { Fragment, useState } from 'react';
import SampleResume from '../Data/resumeSample.json';

// Props Interface
interface EditResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
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

const EditResume: React.FC<EditResumeProps> = ({ onPreClick, onNextClick }) => {
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
  const updateName = (newName: string) => {
    setUserData((prevState) => ({
      ...prevState,
      resume: {
        ...prevState.resume,
        name: newName,
      },
    }));
  };

  return (
    <div className='w-full Gamtan'>
      <div className='w-full flex justify-center items-center'>
        <div className='m-5 border border-gray-200 rounded-xl p-5'>
          <Fragment>
            <table className='w-full'>
              <tbody>
              <tr className="border-t border-gray-200">
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
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.name}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.phone}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    생년월일
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.birthDate}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">Email</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.email}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
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
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500"
                  colSpan={2}>{userData.workExperience[0]?.start} ~ {userData.workExperience[0]?.end}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900"></td>
                  {/* <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500"></td> */}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    근무처
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.workExperience[0]?.company}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">업무내용</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.workExperience[0]?.workDescription}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
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
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500"
                  colSpan={2}>{userData.training[0]?.start} ~ {userData.training[0]?.end}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900"></td>
                  {/* <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500"></td> */}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    훈련명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.training[0]?.trainingName}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">훈련기관</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.training[0]?.trainingInstitution}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        </div>
        <div className='h-[50vh] w-1/3 m-5 border border-gray-200 rounded-xl p-5'>
          수정할 수 있는 div만들기???
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
