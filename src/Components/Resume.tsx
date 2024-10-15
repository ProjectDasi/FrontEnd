import React, { useRef, useCallback, useState } from 'react';
import axios from 'axios';

interface ResumeProps {
  onNextClick: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onNextClick }) => {
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
        const response = await axios.post(`http://localhost:8080/scan/resume/${userId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Image uploaded successfully:', response.data);
        onNextClick();
      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    }
  };

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
        <div className="border border-gray-300 rounded-3xl p-5 mb-8">
          <img src={previewImg} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <div className="flex justify-center items-center">
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
            onClick={handleImageSubmit} // 이미지 제출
          >
            제출하기
          </button>
        )}
      </div>
    </div>
  );
};

export default Resume;
