import React, { useRef, useCallback, useState } from 'react';
import axios from 'axios';

interface ResumeProps {
  onNextClick: () => void;
  userId: string; // id를 받는 prop 추가
}

const Resume: React.FC<ResumeProps> = ({ onNextClick, userId }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // 선택된 파일을 상태로 관리

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    setSelectedFile(file); // 파일 상태 저장

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

  const onSubmitImage = useCallback(async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('resume', selectedFile); // 서버로 전송할 파일 추가

    try {
      const response = await axios.post(
        `http://172.22.60.228:8080/scan/resume/${userId}`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // 파일 업로드를 위한 헤더 설정
          },
        }
      );

      console.log('서버 응답:', response.data);
      onNextClick(); // 제출 완료 후 다음으로 이동
    } catch (error) {
      console.error('파일 업로드 실패:', error);
    }
  }, [selectedFile, userId, onNextClick]);

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
        <button
          type="button"
          className="mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
          onClick={onUploadImageButtonClick}
        >
          {previewImg ? '다시 업로드하기' : '이력서 업로드'}
        </button>
        {previewImg && (
          <button
            type="button"
            className="ml-4 mb-4 block rounded-md bg-[#3EB489] px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#2E8B57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3EB489]"
            onClick={onSubmitImage} // 파일 전송 함수 실행
          >
            제출하기
          </button>
        )}
      </div>
    </div>
  );
};

export default Resume;
