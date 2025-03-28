import { useState, useEffect } from 'react';

// ICONS
import { FaUser } from 'react-icons/fa';
import { BsFileEarmarkPost } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';
import { VscDebugRestart } from 'react-icons/vsc';
import { ImCross } from "react-icons/im";


const SocialMedia = () => {
  // STATES
  const [streamType, setStreamType] = useState(() => {
    return 'posts';
  });
  const [social, setSocial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // EFFECTS
  useEffect(() => {
    setLoading(true);
    setError(null);
    // FETCHING THE DATA
    fetch(`https://jsonplaceholder.typicode.com/${streamType.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('FALIED TO LOAD DATA');
        }
        return response.json();
      })
      .then((json) => {
        setSocial(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [streamType]);

  // RENDER
  return (
    <div className="h-screen w-full flex flex-col bg-slate-900">
      <nav className="flex items-center justify-center">
        <ul className="flex items-center gap-5 mt-10">
          <button onClick={() => setStreamType('posts')}>
            <li className="text-white button">
              <BsFileEarmarkPost size={30} />
            </li>
          </button>
          <button onClick={() => setStreamType('users')}>
            <li className="text-white button">
              <FaUser size={30} />
            </li>
          </button>
          <button onClick={() => setStreamType('comments')}>
            <li className="text-white button">
              <FaComments size={30} />
            </li>
          </button>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center text-white mt-10 md:mt-15 lg:mt-20 text-2xl">
        <h1 className="mb-4">{streamType.toUpperCase()}</h1>
        {loading && (
          <div className='m-5'>
            <VscDebugRestart size={30} />
          </div>
        )}
        {error && <div className="flex items-center justify-center  gap-3 text-red-500"><ImCross size={20}/> {error}</div>}
        <div className="w-full max-w-4xl overflow-auto max-h-[70vh] p-4">
          {social.map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-slate-800 rounded-lg">
              <pre className="whitespace-pre-wrap">{JSON.stringify(item, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
