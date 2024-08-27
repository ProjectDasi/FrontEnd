import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Myinfo() {
    const people = [
        { name: 'Lindsay Walton',id:'LindaWorld', address: '부산시 수영구', birth: '19600101', phonenumber:'010-1234-5678' },
        // More people...
      ]
  return (

    <div className="w-full  Gamtan my-10">
      <div className="w-full sm:flex sm:items-start">
        <div className="sm:flex-auto">
          <h1 className="w-full text-5xl font-semibold text-gray-900 GamtanBold">나의 정보</h1>
        </div>
        <div className=' flex flex-col justify-center items-end'>
          <div className="w-full mt-5 pt-5 text-lg text-gray-700 text-right GamtanBold">
            정확한 추천을 위해서 이력서를 입력해주세요.
          </div>
        <div className="mt-3">
          <Link to="/resume">
          <button
            type="button"
            className="block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
          >
            이력서 입력
          </button>
          </Link>
        </div>
        </div>
      </div>
      <div className="mt-20 flow-root GamtanBold">
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
                    <td className="whitespace-nowrap p-4 text-2xl text-gray-500">{person.name}</td>
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
                    </Fragment>
                ))}
              </tbody>
            </table>
          {/* </div> */}
        </div>
      </div>
      <div className='flex justify-end items-center py-5'>
        <button type="button"
            className="block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]">수정하기</button>
      </div>
    </div>
  )
}
