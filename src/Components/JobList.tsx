import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ListCss.css';
import SearchBox from '../Components/SearchBox'

interface Job {
  id: number;
  title: string;
  regionName: string;
  salary: string | null;
  dueDate: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가
  const itemsPerPage = 10;
  const [searchParams, setSearchParams] = useState({
    region: '',
    keyword: '',
  });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.region || searchParams.keyword) {
      fetchSearchResults(activePage, searchParams.region, searchParams.keyword);
      setIsSearchActive(true); // 검색이 실행된 상태로 유지
    } else {
      fetchJobs(activePage);
      setIsSearchActive(false); // 일반 목록이 실행된 상태로 유지
    }
  }, [activePage, searchParams]);

  const fetchJobs = async (pageNumber: number) => {
    setLoading(true); // 로딩 상태를 true로 설정
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+`/work/list?page=${pageNumber-1}`);
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

  const fetchSearchResults = async (pageNumber: number, region: string, keyword: string) => {
    setLoading(true);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+`/work/search`, {
        params: {
          page: pageNumber-1,
          region: region || undefined,
          keyword: keyword || undefined,
        },
      });
      setJobs(response.data.content || []);
      setTotalItemsCount(response.data.totalElements);
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch search results', error);
      setError('검색 결과를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleRowClick = (jobId: number) => {
    navigate(`/job/${jobId}`);
  };

  const handleSearch = (region: string, keyword: string) => {
    setSearchParams({ region, keyword });
    setActivePage(1);  // 새로운 검색 시 페이지를 첫 번째 페이지로 초기화
    setIsSearchActive(false); 
    setTimeout(() => setIsSearchActive(true), 0); 
  };

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 표시
  }

  if (error) {
    return <div>{error}</div>; // 에러 메시지 표시
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8 Haeparang w-full flex flex-col justify-center items-center">
      <div className='bg-gray-400 -mt-5 mb-5 p-1 w-2/5 text-center text-3xl rounded-xl text-white shadow'>일반 일자리</div>
      <div className='w-full flex justify-end items-center'>
        <div>
        <SearchBox onSearch={handleSearch}/>
        </div>
      </div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0 w-full">
        <table className="min-w-full">
          <colgroup>
            <col className="w-[3%]" />
            <col className="w-full sm:w-1/3" />
            <col className="sm:w-1/4" />
            <col className="sm:w-1/4" />
            <col className="sm:w-1/6" />
            <col className="w-[3%]" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
            <th></th>
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
                마감일
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-200 cursor-pointer hover:bg-[#afd3d6a9] transitio duration-200"
                  onClick={()=> handleRowClick(job.id)}
                >
                  <td className="whitespace-nowrap"></td>
                  <td className="max-w-0 py-5 pl-4 pr-3 text-lg sm:pl-0">
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="mt-1 truncate text-gray-500">{job.regionName}</div>
                  </td>
                  <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{job.regionName}</td>
                  <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{job.salary || '정보 없음'}</td>
                  <td className="py-5 pl-3 pr-4 text-right text-lg text-gray-500 sm:pr-0">{job.dueDate}</td>
                  <td className="py-5 pl-3 pr-4"></td>
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
