import { useState } from 'react';
import { UnfoldMoreRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily:"GamtandotumBold"
  },
  });

  interface SearchBoxProps {
    onSearch: (region: string, keyword: string) => void;
  }

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [formData, setFormData] = useState({
    region: '',
    keyword: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      region: value,
    }));
    setIsOpen(false);  // 옵션 클릭 후 셀렉트 박스 닫기
  };

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      keyword: e.target.value,
    }));
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.region || formData.keyword) {
      onSearch(formData.region, formData.keyword);
      // 검색폼 초기화
       setFormData({
         region: '',
         keyword: '',
       });
    } else {
      alert("지역 또는 검색어를 입력하세요.");
    }
  };

  return (
    <div className='flex items-center GamtanBold'>
      <form onSubmit={handleSearch} className='flex items-center'>
    <div className="relative">
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-52 p-2 border border-gray-300 rounded-lg shadow-sm opacity-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className='GamtanBold'>{formData.region || "지역 선택"}</span>
        <UnfoldMoreRounded />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-y-auto z-10 GamtanBold">
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("강서구")}
          >
            강서구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("금정구")}
          >
            금정구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("기장군")}
          >
            기장군
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("남구")}
          >
            남구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("동구")}
          >
            동구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("동래구")}
          >
            동래구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("부산진구")}
          >
            부산진구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("북구")}
          >
            북구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("사상구")}
          >
            사상구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("서구")}
          >
            서구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("수영구")}
          >
            수영구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("사하구")}
          >
            사하구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("연제구")}
          >
            연제구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("영도구")}
          >
            영도구
          </li>
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("해운대구")}
          >
            해운대구
          </li>
        </ul>
      )}
    </div>
    <ThemeProvider theme={theme}>
          <div className="m-1 w-56">
            <TextField
              id="outlined-basic"
              label="검색어"
              variant="outlined"
              sx={{ '.MuiInputBase-root': { height: '42px' } }}
              InputLabelProps={{
                style: { top: '-6px'  }, // label 위치를 위로 조정
              }}
              value={formData.keyword}
              onChange={handleSearchWordChange}
            />
          </div>
        </ThemeProvider>
      <button 
              type="submit"
              className='border border-slate-400 rounded-md p-[8px]'
              // onClick={handleSearch}
              >
        검색</button>
        </form>
    </div>
  );
}
