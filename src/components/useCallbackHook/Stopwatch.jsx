// ICONS
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { MdOutlineRestartAlt } from 'react-icons/md';

const Stopwatch = () => {
  return (
    <div className="h-screen w-full bg-slate-900 text-white">
      <div className=" min-h-screen w-full flex flex-col items-center justify-center gap-7">
        <div className="text-7xl md:text-8xl lg:text-9xl">00:00.00</div>
        <div className="flex items-center justify-center gap-5">
          <FaPlay size={40} className='button'/>
          <FaPause size={40} className='button'/>
          <MdOutlineRestartAlt  size={40} className='button'/>
        </div>
      </div>
    </div>
  );
};
export default Stopwatch;
