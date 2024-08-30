import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import jobdetailSample from '../Data/jobdetailSample.json';

interface JobDetailData {
  id: number;
  company: string;
  title: string;
  salary: string;
  regionName:string;
  workType:string;
  workCategory:string;
  contact:string;
  workHours:string;
  signupDate: string;
  dueDate: string;
  career: string;
  education: string;
  certification:string;
  email:string;
  details:string;
  link:string;
}

// interface Location {
//   name: string;
//   people: Person[];
// }

// const jobdetailSample = [
//   {
//     id: 260,
//     source: "워크넷",
//     company: "나눔누리주식회사",
//     title: "요양보호사 선생님을 모십니다.",
//     subtitle: "",
//     salary: "시급 12,500원 ~ 12,500원",
//     signup_date: "2024-08-09",
//     due_date: "채용시까지",
//     region_name: "부산광역시 수영구 남천동로 41 (남천동, 남천동 코오롱 하늘채 골든비치)",
//     career: "관계없음",
//     education: "학력무관",
//     work_type: "주 5일 근무",
//     work_category: "방문 복지서비스 제공업",
//     link: "https://www.work.go.kr/empInfo/empInfoSrch/detail/empDetailAuthView.do?searchInfoType=VALIDATION&callPage=detail&wantedAuthNo=KF10922408090006&rtnTarget=list5",
//     contact: "",
//     work_hours: "",
//     details: "<td> [남천동] 요양보호사 선생님을 모십니다.<br/>- 대상자: 2등급 여자 어르신 70대 <br/>- 근무시간: 오전 08:00-11:00 (주 5일 / 3시간 근무)<br/>- 근무내용: 일상생활 도움, 운동<br/>- 시급: 12,500원(수당 포함) <br/>- 근무장소: 남천동 코오롱하늘채아파트<br/>- 자격증: 요양보호사 자격증 필수<br/>- 채용담당자: 010-7476-0907 (연락 후 방문)<br/><br/>동 구인은 실제 서비스 제공기간에 따라 임금을 계산하여 지급하는 형태로 <br/>채용시 근로자마다 주소정 근로시간이나 임금, 근무(예정)지 등에 차이가 있을 수 있음 </td>",
//     email: "",
//     certification: "요양보호사(필수)",

//   }
// //   // More locations...
// ];

// function classNames(...classes: (string | boolean | undefined)[]): string {
//   return classes.filter(Boolean).join(' ');
// }

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [jobDetail, setJobDetail] = useState<JobDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const client = axios.create({
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'ngrok-skip-browser-warning': true,
    },
  });

  useEffect(() => {
    const fetchJobDetail = async () => {
      setLoading(true);
      try {
        const response = await client.get(`https://7e4b-115-22-210-176.ngrok-free.app/work/detail?id=${id}`);
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
                        colSpan={5}
                        scope="colgroup"
                        className="py-2 pl-3 text-left text-xl text-blue-700 sm:pl-3 GamtanBold"
                      >
                        [{jobDetail.company}]
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="pt-5 pb-7 pl-5 pr-3 text-left text-3xl text-gray-900 sm:pl-5 GamtanBold"
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
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{jobDetail.workType}{jobDetail.workHours}</td>
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
                          <div dangerouslySetInnerHTML={{__html:jobDetail.details}}/>
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
