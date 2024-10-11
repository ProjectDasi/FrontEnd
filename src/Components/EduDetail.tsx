import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface EduDetailData {
    source: string;
    title: string;
    organization: string;
    application_start: string;
    application_end: string;
    progress_start: string;
    progress_end: string;
    situation: string;
    apply: string;
    phone: string;
    manager: string;
    charge: string;
    email: string;
    link: string;
    details: string;
    instructor: string;
    tuition: string;
    teaching_method: string;
    capacity: string;
    place: string;
    support: string;
}


export default function EduDetail() {
  const { id } = useParams<{id: string}>();
  const [EduDetail, SetEduDetail] = useState < EduDetailData | null> (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const client = axios.create({
  //   withCredentials: true,
  //   headers: {
  //     'Access-Control-Allow-Credentials': true,
  //     'ngrok-skip-browser-warning': true,
  //   },
  // });
  
  useEffect(()=>{
    const fetchEduDetail = async () =>{
      setLoading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL+`/learning/detail?id=${id}`);
        SetEduDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('데이터 페치 실패', error);
        setError('데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchEduDetail();
  },[id])

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!EduDetail) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-6/7 Gamtan">
      <div className="mt-4 flow-root">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-[35px] text-gray-900 sm:pl-3 border border-gray-200 shadow p-2 rounded-2xl GamtanBold font-bold">
            교육정보</div>
            <div className='border border-gray-200 shadow rounded-lg p-5'>
            <table className="min-w-full">
              <tbody className="bg-white">
                  <Fragment key={EduDetail.link}>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="py-2 pl-3 text-left text-xl text-blue-700 sm:pl-3 GamtanBold"
                      >
                        [{EduDetail.organization}]
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="pt-5 pb-7 pl-5 pr-3 text-left text-3xl text-gray-900 sm:pl-5 GamtanBold"
                      >
                        {EduDetail.title}
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
                          지원기간
                        </td>
                        <td
                        className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.application_start}&nbsp;&nbsp;~&nbsp;&nbsp;{EduDetail.application_end}</td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">교육기간</td>
                        <td
                        className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.progress_start}&nbsp;&nbsp;~&nbsp;&nbsp;{EduDetail.progress_end}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          접수방법
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.apply}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">상태</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.situation}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          담당자
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.manager}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.phone}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      {/* <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          경력
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.career}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">학력</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.education}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          필수자격증
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.certification}</td>
                        </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          담당자 연락처
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.contact}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">이메일</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.email}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr> */}

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
                          <div dangerouslySetInnerHTML={{__html:EduDetail.details}}/>
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
                        <a href={EduDetail.link}>해당 교육공고 사이트로 이동하려면 <span className='text-yellow-600'>클릭</span>하세요</a>
                      </th>
                    </tr>
                  </Fragment>

              </tbody>
            </table>
            </div>
          </div>
          <div className='flex justify-end items-center px-8 py-5'>
            <Link to='/education'>
          <div className='border border-gray-200 shadow rounded-lg px-7 py-3 GamtanBold text-2xl'>목록</div></Link>
      </div>
      </div>
    </div>
  );
}
