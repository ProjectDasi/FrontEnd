import React, { Fragment } from 'react';
import SampleResume from '../Data/resumeSample.json';

interface EditResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
  userData: UserData;
  setUserData: (updatedData: UserData) => void;
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

type CommonFields = {
  start: string;
  end: string | null;
};

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

interface Education {
  educationStart: string | null;
  educationEnd: string | null;
  schoolName: string;
  major: string;
}

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

  if (section === 'resume') {
    setUserData({
      ...userData,
      resume: {
        ...userData.resume,
        [name]: value,
      },
    });
  }

  else if (section === 'workExperience') {
    setUserData({
      ...userData,
      workExperience: userData.workExperience.map((work, i) =>
        i === index ? { ...work, [name]: value } : work
      ),
    });
  }

  else if (section === 'training') {
    setUserData({
      ...userData,
      training: userData.training.map((training, i) =>
        i === index ? { ...training, [name]: value } : training
      ),
    });
  }

  else if (section === 'certification') {
    setUserData({
      ...userData,
      certification: userData.certification.map((cert, i) =>
        i === index ? { ...cert, [name]: value } : cert
      ),
    });
  }

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
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
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
                    className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
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
                <tr className='font-semibold border-b border-[#78BCE3]'>
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
                    className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    훈련사항
                  </th>
                </tr>
                {userData.training.map((training, index) => (
                  <Fragment key={index}>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    훈련기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingstart"
                      placeholder={training.trainingStart || ''}
                      value={training.trainingStart || ''}
                      onChange={(e) => handleInputChange(e, index, 'training')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingend"
                      placeholder={training.trainingEnd || ''}
                      value={training.trainingEnd || ''}
                      onChange={(e) => handleInputChange(e, index, 'training')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-[#78BCE3]'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    훈련명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingName"
                      placeholder={training.trainingName}
                      value={training.trainingName}
                      onChange={(e) => handleInputChange(e, index, 'training')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">훈련기관</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="trainingInstitution"
                      placeholder={training.trainingInstitution}
                      value={training.trainingInstitution}
                      onChange={(e) => handleInputChange(e, index, 'training')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                </Fragment>
                ))}
                {/* 자격증 input */}
                <tr className="border-y border-gray-200">
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    자격•면허•수상사항
                  </th>
                </tr>
                {userData.certification.map((cert, index) => (
                  <Fragment key={index}>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    취득일
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="acquisitionDate"
                      placeholder={cert.acquisitionDate || ''}
                      value={cert.acquisitionDate || ''}
                      onChange={(e) => handleInputChange(e, index, 'certification')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-[#78BCE3]'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    자격•면허/수상 사항
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="certificationName"
                      placeholder={cert.certificationName || ''}
                      value={cert.certificationName || ''}
                      onChange={(e) => handleInputChange(e, index, 'certification')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">시행처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="issuingAuthority"
                      placeholder={cert.issuingAuthority || ''}
                      value={cert.issuingAuthority || ''}
                      onChange={(e) => handleInputChange(e, index, 'certification')}
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
                    className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                  >
                    학력사항
                  </th>
                </tr>
                {userData.education.map((edu, index) => (
                  <Fragment key={index}>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    교육기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="educationstart"
                      placeholder={edu.educationStart || ''}
                      value={edu.educationStart || ''}
                      onChange={(e) => handleInputChange(e, index, 'education')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900 text-center"> ~ </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="educationend"
                      placeholder={edu.educationEnd || ''}
                      value={edu.educationEnd || ''}
                      onChange={(e) => handleInputChange(e, index, 'education')}
                      className="border rounded px-2 py-1"
                    />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-[#78BCE3]'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    학교명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="schoolName"
                      placeholder={edu.schoolName || ''}
                      value={edu.schoolName || ''}
                      onChange={(e) => handleInputChange(e, index, 'education')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">전공분야</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                    <input
                      type="text"
                      name="major"
                      placeholder={edu.major || ''}
                      value={edu.major || ''}
                      onChange={(e) => handleInputChange(e, index, 'education')}
                      className="border rounded px-2 py-1"
                    /></td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                </Fragment>
                ))}
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
