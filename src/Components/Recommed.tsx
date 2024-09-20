import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/text.css';

export default function Recommend() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleBoxClick = (id: string) => {
    setSelectedId(id); // 클릭 시 해당 Box의 id를 상태로 저장
  };

  const closePopup = () => {
    setSelectedId(null); // 팝업을 닫을 때는 null로 초기화
  };

  const getPopupTitle = (id: string) => {
    if (id.startsWith('box')) {
      return `${id.split('box')[1]}번째 추천 일자리`;
    } else if (id.startsWith('edu')) {
      return `${id.split('edu')[1]}번째 추천 교육과정`;
    }
    return '';
  };

  const getPopupContent = (id: string) => {
    if (id.startsWith('box')) {
      return `당신에게 추천하는 ${id.split('box')[1]}번째 추천 일자리 입니다.`;
    } else if (id.startsWith('edu')) {
      return `당신에게 추천하는 ${id.split('edu')[1]}번째 추천 교육과정 입니다.`;
    }
    return '';
  };

  return (
    <div className='w-[85%] mt-10 Gamtan'>
      <div className='text-left GamtanBold text-4xl mb-10'>AI 맞춤 일자리</div>
      <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-2'>
        <motion.div
          className='bg-red-300 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box1"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box1")}
        >
          고용노동부
        </motion.div>
        <motion.div
          className='bg-red-400 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box2"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box2")}
        >
          벼룩시장
        </motion.div>
        <motion.div
          className='bg-red-500 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box3"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box3")}
        >
          워크넷
        </motion.div>
        <motion.div
          className='bg-red-600 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box4"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box4")}
        >
          시니어클럽
        </motion.div>
        <motion.div
          className='bg-red-700 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box5"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box5")}
        >
          어서오세요
        </motion.div>
        <motion.div
          className='bg-red-800 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="box6"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("box6")}
        >
          안녕히 가세요
        </motion.div>
      </div>

      <div className='text-left GamtanBold text-4xl my-10'>AI 맞춤 교육과정</div>
      <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-2'>
        <motion.div
          className='bg-blue-300 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu1"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu1")}
        >
          고용노동부
        </motion.div>
        <motion.div
          className='bg-blue-400 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu2"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu2")}
        >
          벼룩시장
        </motion.div>
        <motion.div
          className='bg-blue-500 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu3"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu3")}
        >
          워크넷
        </motion.div>
        <motion.div
          className='bg-blue-600 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu4"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu4")}
        >
          시니어클럽
        </motion.div>
        <motion.div
          className='bg-blue-700 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu5"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu5")}
        >
          어서오세요
        </motion.div>
        <motion.div
          className='bg-blue-800 MatChum p-4 rounded-lg cursor-pointer'
          layoutId="edu6"
          whileHover={{ scale: 1.08 }}
          onClick={() => handleBoxClick("edu6")}
        >
          안녕히 가세요
        </motion.div>
      </div>

      {/* AnimatePresence로 클릭된 Box가 확대되며 팝업으로 나타나는 애니메이션 */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              layoutId={selectedId} // 클릭된 Box와 같은 layoutId를 공유
              onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫히지 않도록 이벤트 전파 중단
            >
              <h4 className="text-xl font-bold mb-4">{getPopupTitle(selectedId)}</h4>
              <p className="text-sm">{getPopupContent(selectedId)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
