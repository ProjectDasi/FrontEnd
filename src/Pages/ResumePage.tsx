import React, { useState } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Resume from '../Components/Resume'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EditResume from '../Components/EditResume';
import FinishedResume from '../Components/FinishedResume';

export default function ResumePage() {
    const steps = [
        '이력서 업로드 하기',
        '업로드한 이력서 수정하기',
        '이력서 완성하기',
    ];
    const [currentStep, setCurrentStep] = useState(0);

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
      <div className='h-auto w-2/3 flex flex-col justify-start items-center my-5'>
        {currentStep === 0 && <Resume onNextClick={handleNextClick} />}
        {currentStep === 1 && <EditResume onPreClick={handleBeforeClick} onNextClick={handleNextClick}/>}
        {currentStep === 2 && <FinishedResume onPreClick={handleBeforeClick} onNextClick={handleNextClick}/>}
      </div>
    </div>
    <Footer/>
    </div>
  )
}
