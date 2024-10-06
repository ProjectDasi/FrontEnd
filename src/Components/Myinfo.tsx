import React,{ Fragment, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { userState, isLoggedInState } from '../recoil/atoms'

export default function Myinfo() {
    const [user, setUser] = useRecoilState(userState);
    const setIsLoggedIn = useRecoilState(isLoggedInState)[1];
    const navigate = useNavigate();

    const fetchinfo = async () => {
      const id = localStorage.getItem('id');
      const token = localStorage.getItem('token');
      console.log("token: ",token);
      console.log("id: ",id);

      // 백엔드에서 토큰사용하는 코드로 수정 후 주석 해제하기
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8080/profile?id=${id}`
          , {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      );
        setUser(response.data);
      } catch (error) {
        console.error('사용자의 정보를 불러오는데 실패 했습니다.',error)
        // setIsLoggedIn(false);
        // localStorage.clear();
        // navigate('/login');
        navigate('/');
      }
    };
    useEffect(() => {
      fetchinfo();
    },[navigate, setUser, setIsLoggedIn]);

  return (

    <div className="w-full Gamtan my-10">
      <div className="w-full sm:flex sm:items-start">
        <div className="sm:flex-auto">
          <h1 className="w-full text-5xl text-gray-900 Haeparang">나의 정보</h1>
        </div>
        <div className=' flex flex-col justify-center items-end'>
          <div className="w-full mt-5 pt-5 text-lg text-gray-700 text-right Haeparang">
            정확한 추천을 위해서 이력서를 입력해주세요.
          </div>
        <div className="mt-3">
          <Link to="/resume">
          <button
            type="button"
            className="block Haeparang rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
          >
            이력서 입력
          </button>
          </Link>
        </div>
        </div>
      </div>
      <div className="mt-20 flow-root Haeparang">
        <div className=" overflow-x-auto">
          {/* <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> */}
            <table className="min-w-full divide-y divide-gray-300 border-t border-b border-gray-200">
              <tbody className="divide-y divide-gray-200 bg-white text-center">
                {/* {user.map((person) => ( */}
                    <Fragment>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0 ">
                        이름
                        </td>
                    <td className="whitespace-nowrap p-4 text-2xl text-gray-500">{user.name}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">
                        아이디
                        </td>
                    <td className="whitespace-nowrap p-4 text-2xl text-gray-500">{user.id}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">전화번호</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{user.phonenumber}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">주소</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{user.address}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">생년월일</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">{user.birth}</td>
                    </tr>
                    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition ease-in hover:transition duration-500">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl font-medium text-gray-900 sm:pl-0">선호도</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-2xl text-gray-500 sm:pr-0">자신의 직업선호도 결과 (수정하기 버튼을 만들어야 할 수도 있음) </td>
                    </tr>
                    </Fragment>
                {/* ))} */}
              </tbody>
            </table>
          {/* </div> */}
        </div>
      </div>
      <div className='flex justify-end items-center py-5'>
        <Link to="/editmypage">
        <button type="button"
            className="block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg Haeparang text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]">수정하기</button>
        </Link>
      </div>
    </div>
  )
}
