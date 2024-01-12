import React from 'react';
import MainNav from '@/components/MainNav';
import { useButton } from '@mui/base/useButton';
import LightGreenButton from '@/components/LightGreenButton'
import LightGreenButtonTS from '@/components/LightGreenButtonTS'
import FlightIcon from '@mui/icons-material/Flight';

{ /* ICONS*/ }
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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

          { /* MaterialUI Button Using JS*/ }
          
          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <LightGreenButton text="js Button"/>
            </div>
          </li>

          { /* MaterialUI Button Using TS*/ }
          
          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <LightGreenButtonTS text="ts Button"/>
            </div>
          </li>


          { /* ICONS*/ }

          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <AccountBalanceIcon/>
            </div>
          </li>

          <li>
            <div className="flex bg-white justify-center items-center py-6">
              <FlightIcon/>
            </div>
          </li>

        </ul>
      </div>
    </>
  );
}
