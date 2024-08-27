import React from 'react'

interface EditResumeProps {
  onPreClick: () => void;
  onNextClick: () => void;
}
const EditResume: React.FC<EditResumeProps>  = ({ onPreClick, onNextClick }) => {
  return (
    <div>
      <div className='h-[50vh] w-[40vw] m-5 border border-gray-200 rounded-xl p-5'>
      이력서 수정하기 컴포넌트
      </div>
      <div className='flex justify-center items-center'>
      <button 
            type="button" 
            className="mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
            onClick={onPreClick}
          >
            돌아가기
          </button>
      <button 
            type="button" 
            className="ml-4 mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
            onClick={onNextClick}
          >
            제출하기
          </button>
      </div>
    </div>
  )
}
export default EditResume;