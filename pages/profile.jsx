import React from 'react';
import MainNav from '@/components/MainNav';
import { useButton } from '@mui/base/useButton';

export default function AppHome() {
  const { getRootProps } = useButton();

  const handleClick = () => {
    // Your click event logic here
    console.log('Button clicked!');
  };

  return (
    <>
      <MainNav />

      <div className="flex min-h-screen justify-center items-center bg-white">
        <ul>
          {/* Welcome Banner */}
          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <img className="h-15 w-80 rounded-full" src={'banner-chronicle.png'} alt="" />
            </div>
          </li>

          {/* Profile Text */}
          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <h1>Profile</h1>
            </div>
          </li>

          {/* BaseUI Button */}
          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                {...getRootProps({ onClick: handleClick })}
              >
                Update
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
