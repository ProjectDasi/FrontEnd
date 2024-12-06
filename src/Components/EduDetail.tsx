import React, { Fragment, useEffect, useState,MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { GoHeart, GoHeartFill } from 'react-icons/go';

interface EduDetailData {
    title: string;
    organization: string;
    applicationStart: string;
    applicationEnd: string;
    progressStart: string;
    progressEnd: string;
    situation: string | null;
    apply: string | null;
    phone: string | null;
    manager: string | null;
    email: string | null;
    link: string;
    details: string;
}
interface LikeObj {
  memberId: string;
  likeItemId: string;
}

export default function EduDetail() {
  const { id } = useParams<{id: string}>();
  const [EduDetail, SetEduDetail] = useState < EduDetailData | null> (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(()=>{
    const fetchEduDetail = async () =>{
      setLoading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL+`/learning/detail?id=${id}`);
        SetEduDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('데이터 페치 실패', error);
        setError('데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchEduDetail();
  },[id])

  useEffect(() => {
    const fetchLikeStatus = async () => {
      const user = localStorage.getItem('user');
      if (user) { // user가 null이 아닐 때만 실행
        const memberId = localStorage.getItem('id');
        if (EduDetail && memberId) { // jobDetail과 memberId가 존재할 때만 실행
          try {
            const response = await axios.get(process.env.REACT_APP_API_URL+`/like/learning/${memberId}/${id}`);
            setIsLiked(response.data);
          } catch (error) {
            console.error('Error fetching like status', error);
          }
        }
      } else {
        console.error('User data not found in localStorage');
      }
    };
  
    fetchLikeStatus();
  }, [EduDetail]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!EduDetail) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  const handleLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = localStorage.getItem('user');
    if (user) {
      const memberId = localStorage.getItem('id');
      console.log("mid:"+memberId+",jid:"+id+" "+isLiked)
      try {
        if (isLiked === false) {
          const likeObj: LikeObj = {
            memberId: String(memberId),
            likeItemId: String(id)
          };

          const response = await axios.post(process.env.REACT_APP_API_URL+`/like/learning/add`, likeObj);

          if (response.status === 200) {
            setIsLiked(!isLiked);
          } else {
            console.error('Like failed');
          }
        } else {
          const response = await axios.delete(process.env.REACT_APP_API_URL+`/like/learning/${memberId}/${id}`);

          if (response.status === 200) {
            setIsLiked(!isLiked);
          } else {
            console.error('Unlike failed');
          }
        }
      } catch (error) {
        console.error('Request failed', error);
      }
    } else {
      console.error('User not found in localStorage');
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-6/7 Gamtan">
      <div className="mt-4 flow-root">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-[35px] text-gray-900 sm:pl-3 border border-gray-200 shadow p-2 rounded-2xl GamtanBold font-bold">
            교육정보</div>
            <div className='border border-gray-200 shadow rounded-lg p-5'>
            <table className="min-w-full">
              <tbody className="bg-white">
                  <Fragment key={EduDetail.link}>
                    <tr>
                      <th
                        colSpan={4}
                        scope="colgroup"
                        className="py-2 pl-3 text-left text-xl text-blue-700 sm:pl-3 GamtanBold"
                      >
                        [{EduDetail.organization}]
                      </th>
                      <th>
                      <button className=" p-4 rounded-full hover:bg-slate-50 flex items-center justify-center"
                        onClick={handleLike}>
                        <span className="text-2xl text-red-500">
                          {isLiked ? <GoHeartFill /> : <GoHeart />}
                        </span>
                      </button>
                    </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="pt-5 pb-7 pl-5 pr-3 text-left text-3xl text-gray-900 sm:pl-5 GamtanBold"
                      >
                        {EduDetail.title}
                      </th>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        모집요강
                      </th>
                    </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          지원기간
                        </td>
                        <td
                        className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.applicationStart}&nbsp;&nbsp;~&nbsp;&nbsp;{EduDetail.applicationEnd}</td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">교육기간</td>
                        <td
                        className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.progressStart}&nbsp;&nbsp;~&nbsp;&nbsp;{EduDetail.progressEnd}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          접수방법
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.apply}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">상태</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.situation}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          담당자
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.manager}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{EduDetail.phone}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        </td>
                        </tr>

                      <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-xl text-gray-900 sm:pl-3"
                      >
                        세부사항
                      </th>
                    </tr>
                    <tr className='border-gray-200 border-t border-b'>
                        <td colSpan={5}
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          <div dangerouslySetInnerHTML={{ __html: EduDetail.details }} />
                        </td>
                        </tr>

                        <tr className='border-gray-200 border-t'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        </td>
                        </tr>

                        <tr className="border-t border-b border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-center text-xl text-gray-900 sm:pl-3 GamtanBold"
                      >
                        <a href={EduDetail.link}>해당 교육공고 사이트로 이동하려면 <span className='text-yellow-600'>클릭</span>하세요</a>
                      </th>
                    </tr>
                  </Fragment>

              </tbody>
            </table>
            </div>
          </div>
          <div className='flex justify-end items-center px-8 py-5'>
            <Link to='/education'>
          <div className='border border-gray-200 shadow rounded-lg px-7 py-3 GamtanBold text-2xl'>목록</div></Link>
      </div>
      </div>
    </div>
  );
}
