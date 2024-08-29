import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import './ListCss.css';

interface Job {
  id: number;
  title: string;
  regionName: string;
  salary: string | null;
  signupDate: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가
  const itemsPerPage = 10;

  useEffect(() => {
    fetchJobs(activePage);
  }, [activePage]);

  const fetchJobs = async (pageNumber: number) => {
    setLoading(true); // 로딩 상태를 true로 설정
    try {
      const response = await axios.get(`https://8f9f-115-22-210-176.ngrok-free.app/work/list?page=${pageNumber}`);
      setJobs(response.data.content || []); // content가 undefined일 경우 빈 배열로 초기화
      setTotalItemsCount(response.data.totalElements);
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch jobs', error);
      setError('데이터를 불러오는 데 실패했습니다.'); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 상태를 false로 설정
    }
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 표시
  }

  if (error) {
    return <div>{error}</div>; // 에러 메시지 표시
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 Haeparang w-full flex flex-col justify-center items-center">
      <div className='bg-gray-300 -mt-5 mb-5 p-1 w-2/5 text-center text-3xl rounded-xl text-white shadow'>일반 일자리</div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0 w-full">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/3" />
            <col className="sm:w-1/4" />
            <col className="sm:w-1/4" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-2xl text-gray-900 sm:pl-0">
                채용공고
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-2xl text-gray-900 sm:table-cell"
              >
                근로지역
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-2xl font-semibold text-gray-900 sm:table-cell"
              >
                급여
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-2xl font-semibold text-gray-900 sm:pr-0">
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-200">
                  <td className="max-w-0 py-5 pl-4 pr-3 text-lg sm:pl-0">
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="mt-1 truncate text-gray-500">{job.regionName}</div>
                  </td>
                  <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{job.regionName}</td>
                  <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{job.salary || '정보 없음'}</td>
                  <td className="py-5 pl-3 pr-4 text-right text-lg text-gray-500 sm:pr-0">{new Date(job.signupDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-5 text-lg text-gray-500">
                  표시할 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
