import React,{ Fragment } from 'react'

export default function Editmyinfo() {
  const people = [
    { name: 'Lindsay Walton',id:'LindaWorld', address: '부산시 수영구', birth: '19600101', phonenumber:'010-1234-5678' },
    // More people...
  ]
  return (
    <div className="w-full Gamtan my-10">
      내정보 수정하기
      <div className=" overflow-x-auto">
          {/* <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> */}
            <table className="min-w-full divide-y divide-gray-300 border-t border-b border-gray-200">
              <tbody className="divide-y divide-gray-200 bg-white text-center">
                {people.map((person) => (
                    <Fragment>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0 ">
                        이름
                        </td>
                    <td className="whitespace-nowrap px-2 text-2xl text-gray-500">
                      <input type='text' className="w-full py-2 px-2 text-2xl font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-green-500">
                        </input>
                    </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">
                        아이디
                        </td>
                    <td className="whitespace-nowrap p-4 text-2xl text-gray-500">{person.id}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">전화번호</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{person.phonenumber}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">주소</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{person.address}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">생년월일</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{person.birth}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">선호도</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">자신의 직업선호도 결과 (수정하기 버튼을 만들어야 할 수도 있음) </td>
                    </tr>
                    </Fragment>
                ))}
              </tbody>
            </table>
          {/* </div> */}
        </div>
    </div>
  )
}
