import React, { useRef, useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { UserData } from '../Pages/ResumePage'; // ResumePage에서 UserData 타입을 가져옴

interface ResumeProps {
  onNextClick: () => void;
  onDataFetched: (data: UserData) => void;
}

const Resume: React.FC<ResumeProps> = ({ onNextClick, onDataFetched }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  const handleImageSubmit = async () => {
    const userId = localStorage.getItem('id'); // 로컬스토리지에서 사용자 ID 가져오기
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    if (inputRef.current?.files && inputRef.current.files.length > 0) {
      const formData = new FormData();
      formData.append('file', inputRef.current.files[0]);

      try {
        setLoading(true);
        const response = await axios.post(process.env.REACT_APP_API_URL+`/scan/resume/${userId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // const fetchedData: UserData = response.data; // 받아온 데이터를 UserData 형식으로 변환
        onDataFetched(response.data as UserData); // 페치한 데이터를 전달
        console.log('Image uploaded successfully:', response.data);
        onNextClick();
      } catch (error) {
        console.error('Failed to upload image:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="relative">
      {/* 로딩 중일 때 화면을 흐리게 처리 */}
      <div className={`${loading ? 'opacity-50 pointer-events-none' : ''}`}>
        <input
          type="file"
          accept="image/*"
          name="resume"
          ref={inputRef}
          onChange={onUploadImage}
          style={{ display: 'none' }} // 파일 선택 버튼을 숨기기 위해 스타일 적용
        />
        {previewImg && (
          <div className="border border-gray-300 rounded-3xl p-5 mb-8">
            <img src={previewImg} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="m-2 block rounded-md bg-white px-3 py-2 text-center text-lg GamtanBold text-[#2A9BDC] border-2 border-[#2A9BDC] shadow-sm hover:bg-[#2a9bdc] hover:text-white"
            onClick={onUploadImageButtonClick}
          >
            {previewImg ? '다시 업로드하기' : '이력서 업로드'}
          </button>
          {previewImg && (
            <button
              type="button"
              className="ml-4mb-4 block rounded-md bg-white px-3 py-2 text-center text-lg GamtanBold text-[#2A9BDC] border-2 border-[#2A9BDC] shadow-sm hover:bg-[#2a9bdc] hover:text-white"
              onClick={handleImageSubmit} // 이미지 제출
            >
              제출하기
            </button>
          )}
        </div>
      </div>

      {/* 로딩 중일 때 스피너 표시 */}
      {loading && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-50 GamtanBold">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className='text-2xl mt-3 font-bold'>데이터 추출 중...</div>
        </div>
      )}
    </div>
  );
};

export default Resume;
