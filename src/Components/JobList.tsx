import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import sampleJob from '../Data/finalSample.json';
import './ListCss.css';

export default function JobList() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  // 현재 페이지에 표시할 항목들을 계산
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sampleJob.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

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
            {currentItems.map((project) => (
              <tr key={project.title} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-lg sm:pl-0">
                  <div className="font-medium text-gray-900">{project.subtitle}</div>
                  <div className="mt-1 truncate text-gray-500">{project.details}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{project.location}</td>
                <td className="hidden px-3 py-5 text-right text-lg text-gray-500 sm:table-cell">{project.payment}</td>
                <td className="py-5 pl-3 pr-4 text-right text-lg text-gray-500 sm:pr-0">{project.regidate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4 w-full">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={sampleJob.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
