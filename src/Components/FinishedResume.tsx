import React from 'react'

interface FinishedResumeProps {
    onPreClick: () => void;
    onNextClick: () => void;
  }

const FinishedResume: React.FC<FinishedResumeProps>  = ({ onPreClick, onNextClick }) =>{
    return (
        <div>
          <div className='h-[50vh] w-[40vw] m-5 border border-gray-200 rounded-xl p-5'>
          완성된 이력서
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
                저장하기
              </button>
          </div>
        </div>
      )
    }
    export default FinishedResume;