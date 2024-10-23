import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ListCss.css';
import SearchBox from '../Components/SearchBox'

interface Edu {
  id: number;
  title: string;
  organization: string;
  regionName: string;
  applicationStart: string;
  applicationEnd: string;
  progressStart: string;
  progressEnd: string;
}

export default function EdueList() {
  const [edus, setEdus] = useState<Edu[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
      fetchEdus(activePage);
      setIsSearchActive(false); // 일반 목록이 실행된 상태로 유지
    }
  }, [activePage, searchParams]);

  const fetchEdus = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+`/learning/list?page=${pageNumber-1}`);
      setEdus(response.data.content || []);
      setTotalItemsCount(response.data.totalElements);
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch jobs', error);
      setError('데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchResults = async (pageNumber: number, region: string, keyword: string) => {
    setLoading(true);
    // learnging -> learning 서버연결 후 수정하기
    try {
      const response = await axios.get(`http://localhost:8080/learning/search`, {
        params: {
          page: pageNumber-1,
          region: region || undefined,
          keyword: keyword || undefined,
        },
      });
      setEdus(response.data.content || []);
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

  const handleRowClick = (eduId: number) => {
    navigate(`/education/${eduId}`);
  };

  const handleSearch = (region: string, keyword: string) => {
    setSearchParams({ region, keyword });
    setActivePage(1);  // 새로운 검색 시 페이지를 첫 번째 페이지로 초기화
    setIsSearchActive(false); 
    setTimeout(() => setIsSearchActive(true), 0); 
    console.log(region+" "+keyword)
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 Haeparang w-full flex flex-col justify-center items-center">
      <div className='bg-white -mt-5 mb-5 border border-gray-200 shadow p-1 w-2/5 text-center text-3xl rounded-xl text-gray-500'>일반 교육과정</div>
      <div className='w-full flex justify-end items-center'>
        <SearchBox onSearch={handleSearch}/>
      </div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0 w-full">
        <table className="min-w-full">
          <colgroup>
            <col className="w-[3%]" /> {/* 좌측 공백 열 */}
            <col className="w-full sm:w-1/3" />
            <col className="sm:w-1/5" />
            <col className="sm:w-1/5" />
            <col className="sm:w-1/5" />
            <col className="w-[3%]" /> {/* 우측 공백 열 */}
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th></th> {/* 좌측 공백 */}
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-2xl text-gray-900 sm:pl-0">
                교육제목
              </th>
              <th scope="col" className="hidden px-3 py-3.5 text-right text-2xl text-gray-900 sm:table-cell">
                담당기관
              </th>
              <th scope="col" className="hidden px-3 py-3.5 text-right text-2xl font-semibold text-gray-900 sm:table-cell">
                등록기간
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-2xl font-semibold text-gray-900 sm:pr-0">
                교육기간
              </th>
              <th></th> {/* 우측 공백 */}
            </tr>
          </thead>
          <tbody>
            {edus.map((edu) => (
              <tr key={edu.title} className="border-b border-gray-200 cursor-pointer hover hover:bg-[#78bce35d] transition"
                onClick={() => handleRowClick(edu.id)}>
                <td className="whitespace-nowrap"></td> {/* 좌측 공백 */}
                <td className="max-w-0 py-5 pl-4 pr-3 text-lg sm:pl-0">
                  <div className="font-medium text-gray-900">{edu.title}</div>
                  <div className="mt-1 truncate text-gray-500">{edu.title}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{edu.organization}</td>
                <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">
                  <div>{edu.applicationStart}&nbsp;~</div>
                  <div>{edu.applicationEnd}</div>
                </td>
                <td className="py-5 pl-3 pr-4 text-right text-lg text-gray-500 sm:pr-0">
                  <div>{edu.progressStart}&nbsp;~</div>
                  <div>{edu.progressEnd}</div>
                </td>
                <td className="py-5 pl-3 pr-4"></td> {/* 우측 공백 */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            activeClass="active-page"
          />
        </div>
      </div>
    </div>
  );
}
