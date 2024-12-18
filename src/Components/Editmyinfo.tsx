import React,{ Fragment, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'

export default function Editmyinfo() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState); //유저인포 업데이트 후 response를 저장하여 리코일에 저장
  const [editUser, setEditUser] = useState({ //서버로 보낼 유저인포
    phone: '',
    password:'',
    region: '',
    birth_year: '',
    birth_month: '',
    birth_day: '',
  })
  
  const UpdateUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if(!token){
      navigate('/login')
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8080/profile/edit`, editUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('회원정보를 수정했습니다.');
      setUser(response.data); //response를 recoil에 저장
      navigate('/mypage');
    }
    catch (error) {
      console.error('회원정보 수정 실패', error);
      alert('회원정보를 수정하지 못 했습니다.');
      navigate('/mypage');
    }

  }

  return (
    <div className="w-full Gamtan my-10">
      <div className='GamtanBold text-4xl pb-10'>나의정보 수정하기</div>
      <div className=" overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 border-t border-b border-gray-200">
              <tbody className="divide-y divide-gray-200 bg-white text-center">
                    <Fragment>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0 ">
                        비밀번호
                        </td>
                    <td className="whitespace-nowrap px-2 text-2xl text-gray-500">
                    <input type='password' className="w-full py-2 px-2 text-2xl text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-green-500 placeholder:text-lg placeholder:text-center" placeholder='비밀번호를 입력하세요.'>
                        </input>
                    </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0 ">
                        이름
                        </td>
                    <td className="whitespace-nowrap px-2 text-2xl text-gray-500">
                    <input type='text' className="w-full py-2 px-2 text-2xl font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-green-500 placeholder:text-lg placeholder:text-center" placeholder='이름을 입력하세요.'>
                        </input>
                    </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0 ">
                        전화번호
                        </td>
                    <td className="whitespace-nowrap px-2 text-2xl text-gray-500">
                    <input type='text' className="w-full py-2 px-2 text-2xl font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-green-500 placeholder:text-lg placeholder:text-center" placeholder='-를 제외하고 입력하세요.'>
                        </input>
                    </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">주소</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">구군 select</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">생년월일</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">생년월일 select</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">선호도</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">선호도 select</td>
                    </tr>
                    </Fragment>
              </tbody>
            </table>
            <div className='flex justify-end items-end mt-20'>
              <button className='mb-4 block rounded-md bg-white px-3 py-2 text-center text-lg GamtanBold text-[#2A9BDC] border-2 border-[#2A9BDC] shadow-sm hover:bg-[#2a9bdc] hover:text-white'>수정하기</button>
            </div>
        </div>
    </div>
  )
}
