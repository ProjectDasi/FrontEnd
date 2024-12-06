import React, {Fragment} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FinishedResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
  userData: UserData;  // userData를 props로 받음
}
interface Resume {
  photo?: string | null | undefined;
  name: string;
  address: string;
  phone: string;
  email: string;
  emergencyContact: string;
  emergencyRelationship: string;
  birthDate: string;
  updateDate: string;
}

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

const FinishedResume: React.FC<FinishedResumeProps> = ({ onPreClick, onNextClick, userData }) => {
  const navigate = useNavigate();
  const handleSaveClick = async() => {
    const userId = localStorage.getItem('id');
    try{
      const response = await axios.post(process.env.REACT_APP_API_URL+`/update/resume/${userId}`, userData);
      console.log("저장된 데이터: ", userData);
      navigate('/');

    } catch (err) {
      console.error('데이터를 불러오는데 실패했습니다.', err);
      alert('이력서를 저장하는데 실패했습니다.');
    }
  }
  return (
<div className='w-full Gamtan'>
      <div className='w-full flex justify-center items-center'>
        <div className='m-5 border border-gray-200 rounded-xl p-5'>
          <Fragment>
            <table className='w-full'>
              <tbody>
                {/* 기본정보 */}
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    기본정보
                  </th>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">이름</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.name}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.phone}</td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">생년월일</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.birthDate}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">Email</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{userData.resume.email}</td>
                </tr>

                {/* 경력사항 */}
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    경력사항
                  </th>
                </tr>
                {userData.workExperience.map((work, index) => (
                  <Fragment key={index}>
                    <tr className='font-semibold'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">근무기간</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{work.workStart} ~ {work.workEnd}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">근무처</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{work.company}</td>
                    </tr>
                    <tr className='font-semibold border-b border-[#78BCE3]'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">업무내용</td>
                      <td colSpan={4} className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{work.workDescription}</td>
                    </tr>
                  </Fragment>
                ))}

                {/* 훈련사항 */}
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    훈련사항
                  </th>
                </tr>
                {userData.training.map((training, index) => (
                  <Fragment key={index}>
                    <tr className='font-semibold'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">훈련기간</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{training.trainingStart} ~ {training.trainingEnd}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">훈련명</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{training.trainingName}</td>
                    </tr>
                    <tr className='font-semibold border-b border-[#78BCE3]'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">훈련기관</td>
                      <td colSpan={4} className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{training.trainingInstitution}</td>
                    </tr>
                  </Fragment>
                ))}

                {/* 자격증 */}
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    자격•면허•수상사항
                  </th>
                </tr>
                {userData.certification.map((cert, index) => (
                  <Fragment key={index}>
                    <tr className='font-semibold'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">취득일</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{cert.acquisitionDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">자격증 명</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{cert.certificationName}</td>
                    </tr>
                    <tr className='font-semibold border-b border-[#78BCE3]'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">발급기관</td>
                      <td colSpan={4} className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{cert.issuingAuthority}</td>
                    </tr>
                  </Fragment>
                ))}

                {/* 학력사항 */}
                <tr className="border-y border-gray-200">
                  <th colSpan={5} scope="colgroup" className="bg-[#78bce325] py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3">
                    학력사항
                  </th>
                </tr>
                {userData.education.map((edu, index) => (
                  <Fragment key={index}>
                    <tr className='font-semibold'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">교육기간</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{edu.educationStart} ~ {edu.educationEnd}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">학교명</td>
                      <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{edu.schoolName}</td>
                    </tr>
                    <tr className='font-semibold border-b border-[#78BCE3]'>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">전공분야</td>
                      <td colSpan={4} className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{edu.major}</td>
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
          onClick={handleSaveClick}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default FinishedResume;
