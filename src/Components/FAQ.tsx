import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Images/icon7.png';
import { IoIosArrowForward } from "react-icons/io";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/faq');
        setFaqs(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs');
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const handleRowClick = (faqID: number) => {
    // navigate(`/faq/${faqID}`);
  };

  if (loading) {
    return <div>Loading FAQs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-full Gamtan flex flex-col justify-center items-center'>
      <div className="w-full flex lg:flex-1 pt-6 pb-3 px-8 justify-between items-center shadow-md">
        <div className="flex items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dasi</span>
            <img className="h-20 w-auto" src={logo} alt="Logo" />
          </Link>
          <Link to="/">
            <div className='ml-3 Gamtan text-[25px]'>
              <p className='-mb-2'><span className='GamtanBold text-[#52949a]'>다 </span>시</p>
              <p><span className='GamtanBold text-[#52949a]'>시 </span>작해</p>
              <p className='text-[10px] -mt-1 GamtanBold text-[#1d658f]'>Dreaming Age SenIor</p>
            </div>
          </Link>
        </div>
        <div className='text-[45px] GamtanBold flex-grow text-center'>자주 물어보는 질문</div>
      </div>

      <table className="mt-10 w-3/5 text-2xl text-left border-separate border-spacing-y-1 GamtanBold">
        <colgroup>
          <col className="w-4/5" />
          <col className="w-1/5" />
        </colgroup>
        <tbody>
          {faqs.map((item) => (
            <tr key={item.id}
              className="cursor-pointer hover:bg-[#afd3d6a9] transition duration-200 ease-in-out"
              onClick={() => handleRowClick(item.id)}>
              <td className="border-b border-gray-200 py-4 px-2">{item.question}</td>
              <td className="border-b border-gray-200 py-4 px-2">
                <div className="flex justify-end items-center">
                  <IoIosArrowForward />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
