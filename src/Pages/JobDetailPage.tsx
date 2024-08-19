import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JobDetail from '../Components/JobDetail'

export default function JobDetailPage() {
  var str = "<td> [장림동] 재가요양보호사<br\/><br\/>- 4등급90세여자 화상 어르신 케어업무<br\/>- 주5일 9시~ 12시<br\/>- 제수당 포함 12,400원(기본시급 9,860원)<br\/>- 신체지원 및 가사지원<br\/>- 거동 잘하십니다.<br\/>- 반찬과 원룸이라 청소 정도입니다. <\/td>"
  return (
    <div className='h-full w-full'>
        <div className='shadow-md'>
        <Header/>
        </div>
        <div className='h-full w-full flex flex-col justify-start items-center mt-5'>
        <JobDetail/>
        <div dangerouslySetInnerHTML={{__html:str}}/>
        </div>
    <Footer/>
    </div>
  )
}
