import { useEffect, useRef, useState } from 'react';

// ICONS
import { IoMdPerson } from 'react-icons/io';

const RenderMe = () => {
  // STATE
  const [setName] = useState(() => {
    return '';
  });
  // REF
  const renderCount = useRef(0);

  // EFFECTS
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="h-screen w-full flex flex-col md:flex-row lg:flex-row items-center justify-center bg-slate-900 gap-5">
      <form className="flex items-center gap-5">
        <IoMdPerson size={50} className="text-white" />
        <input
          type="text"
          placeholder="Your name please"
          className="outline-0 border-2 border-white w-[300px] md:w-[400px] lg:w-[500px] p-3 text-white rounded-md"
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <div className="text-2xl text-white border-1 border-transparent px-5 py-2 rounded-md bg-slate-700">
        {renderCount.current}
      </div>
    </div>
  );
};
export default RenderMe;
