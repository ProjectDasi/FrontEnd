import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/text.css';
import sampledata from '../Data/recomSample.json'
import RecomSteps from './RecomSteps';

interface EducationDetail {
  id: number;
  similarity: number;
  tag: string;
  detail: {
    organization: string;
    title: string;
    applicationStart: string;
    applicationEnd: string;
    progressStart: string;
    progressEnd: string;
    apply: string;
    situation: string;
    manager: string | null;
    phone: string | null;
    email: string | null;
    details: string | null;
    link: string;
    viewDetailsLink: string | null;
  };
}

interface JobDetail {
  id: number;
  similarity: number;
  tag: string;
  detail: {
    company: string;
    title: string;
    workHours: string;
    workType: string;
    workCategory: string;
    salary: string;
    regionName: string;
    signupDate: string;
    dueDate: string;
    career: string;
    education: string;
    certification: string;
    contact: string;
    email: string;
    details: string;
    link: string;
  };
}

export default function Recommend() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [aiData, setAiData] = useState<{ educationRecommend: EducationDetail[]; jobRecommend: JobDetail[] } | null>(null);
  const navigate = useNavigate();
  const [accessAllowed, setAccessAllowed] = useState<boolean>(false);

  const handleBoxClick = (id: string) => {
    setSelectedId(id); // 클릭 시 해당 Box의 id를 상태로 저장
  };

  const closePopup = () => {
    setSelectedId(null); // 팝업을 닫을 때는 null로 초기화
  };

  useEffect(() => {
    checkAccess();
    // Datafetch();
  }, []);

  const checkAccess = async() =>{
    const userId = localStorage.getItem('id');

    if (!userId) {
      alert('로그인 후 사용해주세요.');
      return navigate('/login');
    }
    try{
      const resumeResponse = await axios.get(process.env.REACT_APP_API_URL+`/resume/existed/${userId}`);
      const favoritesResponse = await axios.get(process.env.REACT_APP_API_URL+`/like/${userId}`);
      // console.log("resumeResponse.data",resumeResponse.data)

      const hasResume = resumeResponse.data ;
      const hasFavorites = favoritesResponse.data ;

      console.log("hasFavorites",hasFavorites);
      console.log("hasResume",hasResume);
      if (hasResume && hasFavorites) {
        setAccessAllowed(true);
        Datafetch();
      } else {
        alert('이력서 및 관심 항목이 필요합니다.');
        navigate('/');
      }
    } catch (error) {
      console.error('데이터를 확인하는 중 오류가 발생했습니다.', error);
      alert('페이지 접근이 제한됩니다.');
      navigate('/login');
    
    }

  }

  const Datafetch = async () => {
    const userId = localStorage.getItem('id');

    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+`/personal/recommend?id=${userId}`);

      setAiData(response.data);
      // setAiData(sampledata);
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다.', error);
    }
  };

  if (!accessAllowed) return null;

  const getPopupContent = (id: string) => {
    if (!aiData) return '';

    if (id.startsWith('edu')) {
      const index = parseInt(id.split('edu')[1], 10) - 1;
      const edu = aiData.educationRecommend[index];
      return (
          <div className='w-full'>
          <table className='w-auto'>
              <tbody>
              <tr className="border-t border-[#2A9BDC]">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-[#2A9BDC] bg-opacity-20 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        {edu.detail.title}
                      </th>
                    </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    교육기관
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{edu.detail.organization}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">진행상태</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{edu.detail.situation}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    신청기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500" colSpan={2}>{edu.detail.applicationStart} ~ {edu.detail.applicationEnd}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-[#2A9BDC]'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    진행기간
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500" colSpan={2}>{edu.detail.progressStart} ~ {edu.detail.progressEnd}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                </tbody>
                </table>
                <div className='text-right mt-5'>
                  <a href={edu.detail.link} target="_blank" rel="noopener noreferrer"
                  className='GamtanBold '>
                    교육공고로 이동</a>
                </div>
        </div>
      );
    }

    if (id.startsWith('job')) {
      const index = parseInt(id.split('job')[1], 10) - 1;
      const job = aiData.jobRecommend[index];
      return (
        <div className='w-full'>
          <table className='w-auto'>
              <tbody>
              <tr className="border-t border-[#52949a]">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-[#52949a] bg-opacity-20 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        {job.detail.title}
                      </th>
                    </tr>
                <tr className='font-semibold'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    회사명
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{job.detail.company}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">근무형태</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{job.detail.workType}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                <tr className='font-semibold border-b border-[#52949a]'>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                    지역
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{job.detail.regionName}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">급여</td>
                  <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{job.detail.salary}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  </td>
                </tr>
                </tbody>
                </table>
                <div className='text-right mt-5'>
                  <a href={job.detail.link} target="_blank" rel="noopener noreferrer"
                  className='GamtanBold '>
                    채용공고로 이동</a>
                </div>
        </div>
      );
    }

    return '';
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full'>
      <RecomSteps/>
      </div>
    <div className='w-[85%] mt-10 Gamtan'>
      <div className='text-left GamtanBold text-4xl mb-10'>AI 맞춤 일자리</div>
      <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-2'>
        {aiData?.jobRecommend.map((job, index) => (
          <motion.div
            key={job.id}
            className='bg-[#52949a] bg-opacity-90 MatChum rounded-lg cursor-pointer w-full text-white flex flex-col'
            layoutId={`job${index + 1}`}
            whileHover={{ scale: 1.08 }}
            onClick={() => handleBoxClick(`job${index + 1}`)}
          > 
            <div className='text-center w-[80%]'>{job.detail.title}</div>
          <div className='text-base mt-3'>
            매칭률 {Math.round(job.similarity * 100)}%</div>
          </motion.div>
        ))}
      </div>

      <div className='text-left GamtanBold text-4xl my-10'>AI 맞춤 교육과정</div>
      <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-2'>
        {aiData?.educationRecommend.map((edu, index) => (
          <motion.div
            key={edu.id}
            className='bg-[#2A9BDC] bg-opacity-80 MatChum p-4 rounded-lg cursor-pointer text-white w-full flex flex-col'
            layoutId={`edu${index + 1}`}
            whileHover={{ scale: 1.08 }}
            onClick={() => handleBoxClick(`edu${index + 1}`)}
          >
            <div className='text-center w-[80%]'>
            {edu.detail.title}
            </div>
            <div className='text-base mt-3'>
            매칭률 {Math.round(edu.similarity * 100)}%</div>
          </motion.div>
        ))}
      </div>

      {/* AnimatePresence로 클릭된 Box가 확대되며 팝업으로 나타나는 애니메이션 */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-auto"
              layoutId={selectedId} // 클릭된 Box와 같은 layoutId를 공유
              onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫히지 않도록 이벤트 전파 중단
            >
              {getPopupContent(selectedId)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}
