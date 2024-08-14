import Header from '../Components/Header';
import Footer from '../Components/Footer';
import scroll from '../Images/scroll4.png';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './main.css';
import edu from '../Images/school.png'
import job from '../Images/job.png'
import resume from '../Images/resume.png'
import PopulationChart from '../Components/PopulationChart';
import ElderlyChart from '../Components/PopulationJobChart';

export default function MainPage() {
  const data = [
    { Year: '2014', 'Total Population': 50623704.0, 'Population 65+': 6989920.0, 'Aging Index': 16.01 },
    { Year: '2015', 'Total Population': 50926264.0, 'Population 65+': 7383343.0, 'Aging Index': 16.84 },
    { Year: '2016', 'Total Population': 51226497.0, 'Population 65+': 7795649.0, 'Aging Index': 17.69 },
    { Year: '2017', 'Total Population': 51527999.0, 'Population 65+': 8224142.0, 'Aging Index': 18.58 },
    { Year: '2018', 'Total Population': 51827313.0, 'Population 65+': 8666632.0, 'Aging Index': 19.50 },
    { Year: '2019', 'Total Population': 52125411.0, 'Population 65+': 9122104.0, 'Aging Index': 20.45 },
    { Year: '2020', 'Total Population': 52424047.0, 'Population 65+': 9590871.0, 'Aging Index': 21.43 },
    { Year: '2021', 'Total Population': 52721621.0, 'Population 65+': 10062002.0, 'Aging Index': 22.38 },
    { Year: '2022', 'Total Population': 53018394.0, 'Population 65+': 10544139.0, 'Aging Index': 23.32 },
    { Year: '2023', 'Total Population': 53314782.0, 'Population 65+': 11054682.0, 'Aging Index': 24.27 },
    { Year: '2024', 'Total Population': 53610543.0, 'Population 65+': 11584933.0, 'Aging Index': 25.23 },
  ];

  const data2 = [
    { Year: '2019', TotalPopulation: 44504, ElderlyPercentage: 17.7, EmploymentRate: 66.9 },
    { Year: '2020', TotalPopulation: 44785, ElderlyPercentage: 17.9, EmploymentRate: 66.6 },
    { Year: '2021', TotalPopulation: 45080, ElderlyPercentage: 18.1, EmploymentRate: 66.3 },
    { Year: '2022', TotalPopulation: 45260, ElderlyPercentage: 18.2, EmploymentRate: 68.8 },
    { Year: '2023', TotalPopulation: 45407, ElderlyPercentage: 18.3, EmploymentRate: 69.9 },
    { Year: '2024-01', TotalPopulation: 45514, ElderlyPercentage: 18.4, EmploymentRate: 68.2 },
    { Year: '2024-02', TotalPopulation: 45525, ElderlyPercentage: 18.4, EmploymentRate: 68.5 },
    { Year: '2024-03', TotalPopulation: 45529, ElderlyPercentage: 18.4, EmploymentRate: 69.4 },
    { Year: '2024-04', TotalPopulation: 45539, ElderlyPercentage: 18.5, EmploymentRate: 69.8 },
    { Year: '2024-05', TotalPopulation: 45543, ElderlyPercentage: 18.5, EmploymentRate: 70.5 },
    { Year: '2024-06', TotalPopulation: 45550, ElderlyPercentage: 18.5, EmploymentRate: 70.3 },
  ];
  



  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const video = document.getElementById('mainVideo') as HTMLVideoElement;

    if (video) {
      video.playbackRate = 0.7;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) { // You can adjust the scroll value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-screen w-full'>
      <div className='fixed top-0 left-0 right-0 bg-white z-50'>
        <Header />
      </div>

      <div className={`w-full flex items-start justify-center pt-16 ${isScrolled ? 'transition-all duration-500 ease-in-out' : ''}`}>
        <div className='text-center relative flex items-center justify-center'>
          <video
            id="mainVideo"
            src="/videos/senior.mp4"
            autoPlay
            loop
            muted
            className={`opacity-80 ${isScrolled ? 'w-[87.5%] rounded-3xl' : 'w-full'} transition-all duration-500 ease-in-out`}
          />
          <div className="absolute md:top-24 md:right-40 lg:top-36 lg:right-20 Blueroad text-green-900 text-5xl font-extrabold animate-pulse">
            &nbsp;&nbsp;당신의 새로운 시작을 응원합니다&nbsp;&nbsp;
          </div>
          <div className="absolute md:top-28 md:right-48 lg:top-80 lg:right-72">
            <img src={scroll} className="buttonPosition h-10" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className='h-full w-full flex items-center justify-center mt-24 mb-24'>
          <div className='grid grid-cols-1 xl:grid-cols-2 w-4/5 p-20 gap-x-10 h-full gap-y-10'>
            <Link to="/job">
              <div className="bg-green-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col pr-4'>
                  <h2 className="text-white text-2xl font-bold">일자리검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-green-300 p-4 rounded-full">
                    <img
                      src={job}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/education">
              <div className="bg-purple-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">교육검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-purple-300 p-4 rounded-full">
                    <img
                      src={edu}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="bg-yellow-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">이력서 작성</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 작성하세요.</p>
                </div>
                <div>
                  <div className="bg-yellow-300 p-4 rounded-full">
                    <img
                      src={resume}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="bg-orange-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">일자리검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-orange-300 p-4 rounded-full">
                    <img
                      src={job}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className='h-[100vh] w-full flex items-center justify-center'>
          <PopulationChart data={data} />
        </div>
      </motion.div>
      <div className='h-[100vh] w-full flex items-center justify-center'>
        <ElderlyChart data={data2} />
      </div>
      <Footer />
    </div>
  );
}
