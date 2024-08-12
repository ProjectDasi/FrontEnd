import React from 'react';

// 프로젝트 타입 정의
interface Project {
  id: number;
  institution: string;
  field: string;
  type: string;
  applicationPeriod: string;
}

// 샘플 프로젝트 데이터
const projects: Project[] = [

  {
    id: 1,
    institution: "연제구보건소(연산6동 마을건강센터)",
    field: "연산6동 마을건강센터 기간제근로자(마을간호사)",
    type: "기간제",
    applicationPeriod: "2024-08-07 ~ 2024-08-16",
    
  },
  {
    id: 2,
    institution: "기장군도시관리공단 정관노인복지관",
    field: "공고문 참조",
    type: "기간제",
    applicationPeriod: "2024-08-07 ~ 2024-08-16",
    
  },
  {
    id: 3,
    institution: "해운대구청",
    field: "공고문 참조",
    type: "무기계약직",
    applicationPeriod: "2024-08-12 ~ 2024-08-14",
    
  }
  // More projects...
];

export default function JobList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 Haeparang">
      <div className="sm:flex sm:items-center">
        {/* <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div> */}
        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Print
          </button>
        </div> */}
      </div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/3" />
            <col className="sm:w-1/4" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/4" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-2xl text-gray-900 sm:pl-0">
                기관이름
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-2xl text-gray-900 sm:table-cell"
              >
                근로영역
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-2xl font-semibold text-gray-900 sm:table-cell"
              >
                근로유형
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-2xl font-semibold text-gray-900 sm:pr-0">
                지원기간
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">{project.institution}</div>
                  <div className="mt-1 truncate text-gray-500">{project.institution}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.field}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.type}</td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">{project.applicationPeriod}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
