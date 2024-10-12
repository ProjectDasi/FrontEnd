import React, { useState } from 'react';
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
import SampleResume from '../Data/resumeSample.json';

// Resume Interface
interface Resume {
  photo?: string | null | undefined;
  name: string;
  address: string;
  phone: string;
  email: string;
  emergencyContact: string;
  emergencyRelationship: string;
  birthDate: string;
  updateDate: string;
}

// Common Fields Interface
type CommonFields = {
  start: string;
  end: string | null;
};

// Work Experience, Certification, Training Interfaces
interface WorkExperience extends CommonFields {
  company: string;
  workDescription: string;
}

interface Certification {
  acquisitionDate?: string | null;
  certificationName?: string | null;
  issuingAuthority: string;
}

interface Training extends CommonFields {
  trainingName: string;
  trainingInstitution: string;
}

// Education Interface (placeholder for now)
interface Education {
  // Define properties if they exist
}

// Main Data Interface
interface UserData {
  resume: Resume;
  workExperience: WorkExperience[];
  certification: Certification[];
  training: Training[];
  education: Education[];
}

export default function ResumePage() {
    const steps = [
        '이력서 업로드 하기',
        '업로드한 이력서 수정하기',
        '이력서 완성하기',
    ];
    const [currentStep, setCurrentStep] = useState(0);
    const [userData, setUserData] = useState<UserData>({
      resume: SampleResume.resume,
      workExperience: SampleResume.workExperience.map((work) => ({
        start: work.workStart,
        end: work.workEnd,
        company: work.company,
        workDescription: work.workDescription,
      })),
      certification: SampleResume.certification,
      training: SampleResume.training.map((training) => ({
        start: training.trainingStart,
        end: training.trainingEnd,
        trainingName: training.trainingName,
        trainingInstitution: training.trainingInstitution,
      })),
      education: SampleResume.education,
    });

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
          {currentStep === 0 && <Resume onNextClick={handleNextClick} />}
          {currentStep === 1 && 
            <EditResume 
              onPreClick={handleBeforeClick} 
              onNextClick={handleNextClick}
              userData={userData} 
              setUserData={setUserData}
            />
          }
          {currentStep === 2 && 
            <FinishedResume 
              onPreClick={handleBeforeClick} 
              onNextClick={handleNextClick} 
              userData={userData} // FinishedResume에도 userData 전달
            />
          }
        </div>
      </div>
      <div className='quickbt'>
        <FAQbutton />
      </div>
      <Footer/>
    </div>
  )
}
