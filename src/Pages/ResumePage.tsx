import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Resume from '../Components/Resume';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EditResume from '../Components/EditResume';
import FinishedResume from '../Components/FinishedResume';
import FAQbutton from '../Components/FAQbutton';

export default function ResumePage() {
    const steps = [
        '이력서 업로드 하기',
        '업로드한 이력서 수정하기',
        '이력서 완성하기',
    ];
    
    const [currentStep, setCurrentStep] = useState(0);
    const [userId, setUserId] = useState<string | null>(null);  // userId 상태 선언

    // userId 값을 가져오는 로직
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId'); // 예시로 localStorage에서 가져옴
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const handleNextClick = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    const handleBeforeClick = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

  return (
    <div className='h-screen w-full'>
      <div className='shadow-md'>
        <Header/>
      </div>
      <div className='w-full min-h-[77vh] flex justify-start flex-col items-center pt-16'>
        <div className='w-full pb-5'>
            <Box sx={{ width: '100%' }}>
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </Box>
        </div>
        <div className='h-auto w-[88%] flex flex-col justify-start items-center my-5'>
          {/* userId가 있을 때만 Resume 컴포넌트를 렌더링 */}
          {currentStep === 0 && userId && <Resume onNextClick={handleNextClick} userId={userId}/>}
          {currentStep === 1 && <EditResume onPreClick={handleBeforeClick} onNextClick={handleNextClick}/>}
          {currentStep === 2 && <FinishedResume onPreClick={handleBeforeClick} onNextClick={handleNextClick}/>}
        </div>
      </div>
      <div className='quickbt'>
        <FAQbutton />
      </div>
      <Footer/>
    </div>
  )
}
