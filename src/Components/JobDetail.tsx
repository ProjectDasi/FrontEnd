import React, { Fragment, useEffect, useState,MouseEvent  } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { GoHeart, GoHeartFill } from 'react-icons/go';
// import jobdetailSample from '../Data/jobdetailSample.json';

interface JobDetailData {
  id: number;
  company: string;
  title: string;
  salary: string;
  regionName: string;
  workType: string;
  workCategory: string;
  contact: string;
  workHours: string;
  signupDate: string;
  dueDate: string;
  career: string;
  education: string;
  certification: string;
  email: string;
  details: string;
  link: string;
}
interface LikeObj {
  member: string;
  job: string;
}
export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [jobDetail, setJobDetail] = useState<JobDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  
  // const client = axios.create({
  //   withCredentials: true,
  //   headers: {
  //     'Access-Control-Allow-Credentials': true,
  //     'ngrok-skip-browser-warning': true,
  //   },
  // });

  useEffect(() => {
    const fetchJobDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/work/detail?id=${id}`);
        setJobDetail(response.data); // 서버에서 가져온 데이터를 상태에 저장
        console.log(response);
      } catch (error) {
        console.error('Failed to fetch job details', error);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!jobDetail) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  const handleLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const user = localStorage.getItem('user');
    if (user) {
      const memberId = JSON.parse(user).id;
      const jobId = jobDetail.id;
      try {
        if (isLiked === false) {
          const likeObj: LikeObj = {
            member: memberId,
            job: String(jobId)
          };
  
          const response = await axios.post('http://10.125.121.220:8080/api/likes', likeObj);
  
          if (response.status === 200) {
            setIsLiked(!isLiked);
          } else {
            console.error('Like failed');
          }
        } else {
          const response = await axios.delete(`http://10.125.121.220:8080/api/likes/${memberId}/${jobId}`);
  
          if (response.status === 200) {
            setIsLiked(!isLiked);
          } else {
            console.error('Unlike failed');
          }
        }
      } catch (error) {
        console.error('Request failed', error);
      }
    } else {
      console.error('User not found in localStorage');
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-6/7 Gamtan">
      <div className="mt-4 flow-root">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-[35px] text-gray-900 sm:pl-3 border border-gray-200 shadow p-2 rounded-2xl GamtanBold font-bold">
            채용정보</div>
          <div className='border border-gray-200 shadow rounded-lg p-5'>
            <table className="min-w-full">
              <tbody className="bg-white">
                <Fragment key={jobDetail.id}>
                  <tr>
                    <th
                      colSpan={4}
                      scope="colgroup"
                      className="py-2 pl-3 text-left text-xl text-blue-700 sm:pl-3 GamtanBold"
                    >
                      [{jobDetail.company}]
                    </th>
                    <th>
                      <button className=" p-4 rounded-full hover:bg-slate-50 flex items-center justify-center"
                        onClick={handleLike}>
                        <span className="text-2xl text-red-500">
                          {isLiked ? <GoHeartFill /> : <GoHeart />}
                        </span>
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={5}
                      scope="colgroup"
                      className="pt-5 pb-7 pl-5 pr-3 text-left text-3xl text-gray-900 sm:pl-5 GamtanBold  max-w-40"
                    >
                      {jobDetail.title}
                    </th>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      colSpan={5}
                      scope="colgroup"
                      className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                    >
                      모집요강
                    </th>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      근무시간
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">  {jobDetail.workType}
                      {jobDetail.workHours ? `, ${jobDetail.workHours}` : ''}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">근무업종</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.workCategory}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      임금
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.salary}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">근무지역</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.regionName}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      등록일
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.signupDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">마감일</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.dueDate}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      경력
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.career}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">학력</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.education}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      필수자격증
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.certification}</td>
                  </tr>

                  <tr className='border-gray-200 border-t font-semibold'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      담당자 연락처
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.contact}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">이메일</td>
                    <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.email}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      colSpan={5}
                      scope="colgroup"
                      className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                    >
                      세부사항
                    </th>
                  </tr>
                  <tr className='border-gray-200 border-t border-b'>
                    <td colSpan={5}
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                      <div dangerouslySetInnerHTML={{ __html: jobDetail.details }} />
                    </td>
                  </tr>

                  <tr className='border-gray-200 border-t'>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                    </td>
                  </tr>

                  <tr className="border-t border-b border-gray-200">
                    <th
                      colSpan={5}
                      scope="colgroup"
                      className="bg-gray-50 py-2 pl-4 pr-3 text-center text-xl text-gray-900 sm:pl-3 GamtanBold"
                    >
                      <a href={jobDetail.link}>해당 채용공고 사이트로 이동하려면 <span className='text-yellow-600'>클릭</span>하세요</a>
                    </th>
                  </tr>
                </Fragment>

              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-end items-center px-8 py-5'>
          <Link to='/job'>
            <div className='border border-gray-200 shadow rounded-lg px-7 py-3 GamtanBold text-2xl'>목록</div></Link>
        </div>
      </div>
    </div>
  );
}
