import FindPW from '../Components/FindPW'
import bg from '../Images/6583.jpg'

export default function FindPWPage() {
  return (
        <div className='w-full h-full flex justify-center flex-col items-center'>
            <div className='w-2/3 flex flex-col justify-center items-center -mt-52'>
            <FindPW/>
            </div>
            <div className="w-full h-36 mt-20 opacity-70">
          <img src={bg}/>
          </div>
        </div>

  )
}
