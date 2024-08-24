import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface edudetailSample {
    source: string;
    title: string;
    organization: string;
    application_start: string;
    application_end: string;
    progress_start: string;
    progress_end: string;
    situation: string;
    apply: string;
    phone: string;
    manager: string;
    charge: string;
    email: string;
    link: string;
    details: string;
    instructor: string;
    tuition: string;
    teaching_method: string;
    capacity: string;
    place: string;
    support: string;
}

const edudetailSample = [
    {
        source: "부산일자리정보망",
        title: "국민취업지원제도 이음길HR",
        organization: "고용노동부",
        application_start: "2024-04-24 9:00",
        application_end: "2024-12-31 18:00",
        progress_start: "2024-04-24",
        progress_end: "2024-12-31",
        situation: "접수중",
        apply: "온라인,방문",
        phone: "051-900-2231~3",
        manager: "이음길HR",
        charge: "이음길HR",
        email: "",
        link: "https://www.busanjob.net/03_part/part01_view.asp?idx=12435&page=2&params=search_mode%3DY%26search_save%3DN%26keyword%3D%26kind1_type%3DP%26kind1_type_k%3DP%26kind2_type%3DJP04%26kind2_type%3DJP05%26kind2_type_k%3DJP04%252CJP05",
        details: "<div class=\"view_detail\">\n\t\t\t\t\t\t\t\t\t<div style=\"text-align: center;\" align=\"center\"><span style=\"font-size: 16pt; font-weight: bold; letter-spacing: 0pt;\">취업의 장벽을 넘어서는 도움닫기</span><span lang=\"EN-US\" style=\"font-size: 16pt; font-weight: bold; letter-spacing: 0pt; font-family: 함초롬돋움;\">, </span><span style=\"font-size: 16pt; font-weight: bold; letter-spacing: 0pt;\">이음길</span><span lang=\"EN-US\" style=\"font-size: 16pt; font-weight: bold; letter-spacing: 0pt; font-family: 함초롬돋움;\">HR</span></div><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">🌻 </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">취업에 대한 고민</span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">, </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">이음길에서 나누고 돕겠습니다</span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">:)</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\"><!--[if !supportEmptyParas]-->&nbsp;<!--[endif]--><o:p></o:p></span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-weight:bold;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"font-size: 12pt;\">어떤 취업 지원 서비스가 있을까요</span><span lang=\"EN-US\" style=\"font-family: 함초롬돋움; letter-spacing: 0pt; font-size: 12pt;\">?</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">-  </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">직업심리검사로 나를 파악할 수 있어요</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">-  </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">서류 작성 </span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">&amp; </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">면접에 대한 고민</span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">, </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">함께 해결해 나가요</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">-  </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">유형에 따라 생계지원금도 받을 수 있어요</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\"><!--[if !supportEmptyParas]-->&nbsp;<!--[endif]--><o:p></o:p></span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">이음길이 제공하는 특별한 취업 지원 서비스로 </span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">국민취업지원제도를더욱가치있게만들어보세요</span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">!</span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\"><span style=\"font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\"><!--[if !supportEmptyParas]-->&nbsp;<!--[endif]--><o:p></o:p></span></p><p class=\"0\" style=\"line-height:150%;text-align:center;word-break:keep-all;mso-pagination:none;text-autospace:none;mso-padding-alt:0pt 0pt 0pt 0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\" align=\"center\"><span lang=\"EN-US\" style=\"font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\"> </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">아래 이미지를 클릭하시면</span><span lang=\"EN-US\" style=\"font-family:함초롬돋움;mso-ascii-font-family:함초롬돋움;mso-font-width:100%;letter-spacing:0pt;mso-text-raise:0pt;font-size:12.0pt;mso-font-kerning:1.0pt;\">, </span><span style=\"mso-fareast-font-family:함초롬돋움;font-size:12.0pt;mso-font-kerning:1.0pt;\">이음길과 함께 하는</span></p><span style=\"font-size: 12pt;\"><div style=\"text-align: center;\" align=\"center\"><span style=\"font-size: 12pt;\">국민취업지원제도의 신청상담을 받아볼 수 있습니다</span><span style=\"letter-spacing: 0pt; font-size: 12pt;\">☘</span></div><div style=\"text-align: center;\" align=\"center\"><span style=\"letter-spacing: 0pt; font-size: 12pt;\"><br></span></div><div style=\"text-align: center;\" align=\"center\"><span style=\"letter-spacing: 0pt; font-size: 12pt;\"><a href=\"https://naver.me/x58EzhQR\" target=\"_self\"><img src=\"/upload/editor/20240424095302.png\" title=\"20240424095302.png\"><br style=\"clear:both;\"></a><br></span></div><div style=\"text-align: center;\" align=\"center\"><span style=\"letter-spacing: 0pt; font-size: 12pt;\"><a href=\"https://naver.me/x58EzhQR\" target=\"_self\"><img src=\"/upload/editor/20240424095312.png\" title=\"20240424095312.png\"><br style=\"clear:both;\"></a><br></span></div></span><p>&nbsp;</p><p>&nbsp;</p>\n\t\t\t\t\t\t\t\t</div>",
        instructor: "",
        tuition: "",
        teaching_method: "",
        capacity: "",
        place: "",
        support: ""
    }
];


export default function EduDetail() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-6/7 Gamtan">
      <div className="mt-4 flow-root">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-[35px] text-gray-900 sm:pl-3 border border-gray-200 shadow p-2 rounded-2xl GamtanBold font-bold">
            교육정보</div>
            <div className='border border-gray-200 shadow rounded-lg p-5'>
            <table className="min-w-full">
              <tbody className="bg-white">
                {edudetailSample.map((item) => (
                  <Fragment key={item.link}>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="py-2 pl-3 text-left text-xl text-blue-700 sm:pl-3 GamtanBold"
                      >
                        [{item.organization}]
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="pt-5 pb-7 pl-5 pr-3 text-left text-3xl text-gray-900 sm:pl-5 GamtanBold"
                      >
                        {item.title}
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
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.application_start}&nbsp;~&nbsp;{item.application_end}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">교육기간</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.progress_start}&nbsp;~&nbsp;{item.progress_end}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          접수방법
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.apply}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">상태</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.situation}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          담당자
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.manager}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">연락처</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.phone}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      {/* <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          경력
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.career}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">학력</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.education}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          필수자격증
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.certification}</td>
                        </tr>

                      <tr className='border-gray-200 border-t font-semibold'>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-gray-900 sm:pl-3">
                          담당자 연락처
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.contact}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-900">이메일</td>
                        <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">{item.email}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        </td>
                      </tr> */}

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
                          <div dangerouslySetInnerHTML={{__html:item.details}}/>
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
                        <a href={item.link}>해당 교육공고 사이트로 이동하려면 <span className='text-yellow-600'>클릭</span>하세요</a>
                      </th>
                    </tr>
                  </Fragment>
                ))}

              </tbody>
            </table>
            </div>
          </div>
          <div className='flex justify-end items-center px-8 py-5'>
            <Link to='/job'>
          <div className='border border-gray-200 shadow rounded-lg px-7 py-3 GamtanBold text-2xl'>목록</div></Link>
      </div>
      </div>
    </div>
  );
}
