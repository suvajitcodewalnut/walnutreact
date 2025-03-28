import { useState } from 'react';

const ControlledInput = () => {
  const [form, setForm] = useState('');

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900">
      <form className="flex gap-3">
        <input
          className="border-2 border-white outline-0 text-white w-[300px] md:w-[500px] lg:w-[600px] p-2 rounded-md"
          type="text"
          placeholder="Write your name please "
          onChange={(event) => setForm(event.target.value)}
        />
      </form>
    <div>
        <h1 className='text-2xl md:text-3xl lg:text-5xl mt-5 text-white'>Welcome, { form ? form : 'user'} </h1>
    </div>
    </div>
  );
};
export default ControlledInput;
