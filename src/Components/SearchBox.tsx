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
    onSearch: (region: string, searchWord: string) => void;
  }

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [formData, setFormData] = useState({
    region: '',
    searchWord: '',
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
      searchWord: e.target.value,
    }));
  };

  const handleSearch = () => {
    onSearch(formData.region, formData.searchWord);
  };

  return (
    <div className='flex items-center GamtanBold'>
    <div className="relative">
      <button
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
      <Box 
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
        <TextField id="outlined-basic" label="검색어" variant="outlined"
        sx={{ '.MuiInputBase-root': { height: '42px'} }}
        InputLabelProps={{
          style: { top: '-6px' },  // label 위치를 위로 조정
        }}
        value={formData.searchWord}
        onChange={handleSearchWordChange}
        />
      </Box>
      </ThemeProvider>
      <button className='border border-slate-400 rounded-md p-[8px]'
              onClick={handleSearch}
              >
        검색</button>
    </div>
  );
}
