import React, { useRef, useCallback, useState } from 'react';

interface ResumeProps {
    onNextClick: () => void;
  }
  
const Resume: React.FC<ResumeProps>  = ({ onNextClick }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreviewImg(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
    console.log(file.name);
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        name="resume"
        ref={inputRef}
        onChange={onUploadImage}
        style={{ display: 'none' }} // 파일 선택 버튼을 숨기기 위해 스타일 적용
      />
      {previewImg && (
        <div className='border border-gray-300 rounded-3xl p-5 mb-8'>
          <img src={previewImg} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <div className='flex justify-center items-center'>
      <button type="button"
            className="mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
      onClick={onUploadImageButtonClick}>{previewImg ? "다시 업로드하기" : "이력서 업로드"}</button>
      {previewImg && (
          <button 
            type="button" 
            className="ml-4 mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
            onClick={onNextClick}
          >
            제출하기
          </button>
        )}
      </div>
      
    </div>
  );
};

export default Resume;
