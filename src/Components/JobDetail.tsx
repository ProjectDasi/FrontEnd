import React, { Fragment } from 'react';

interface Person {
  name: string;
  title: string;
  email: string;
  role: string;
}

interface Location {
  name: string;
  people: Person[];
}

const locations: Location[] = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  // More locations...
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function JobDetail() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-5/6 Gamtan">
      <div className="mt-8 flow-root">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="mb-8 text-left text-5xl font-semibold text-gray-900 sm:pl-3">
            채용정보</div>
            <div className='border border-gray-200 shadow rounded-lg p-5'>
            <table className="min-w-full">
              <tbody className="bg-white">
                {locations.map((location) => (
                  <Fragment key={location.name}>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="py-5 pl-4 pr-3 text-left text-2xl font-semibold text-blue-500 sm:pl-3"
                      >
                        {location.name} 회사이름
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="pt-2 pb-7 pl-4 pr-3 text-left text-3xl font-semibold text-gray-900 sm:pl-3"
                      >
                        {location.name} 공고제목
                      </th>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {location.name} 기업정보
                      </th>
                    </tr>
                    {location.people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
            </div>
          </div>
      </div>
    </div>
  );
}
