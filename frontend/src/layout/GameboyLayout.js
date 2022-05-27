import React from 'react';

function GameboyLayout({ children }) {
  return (
    <div className='h-screen bg-indigo-800'>
      <div className='grid grid-cols-12 gap-4'>
        <div
          className='flex items-center justify-center
          col-start-1 col-span-12 md:col-start-2 md:col-end-12 lg:col-start-2 lg:col-end-12
          w-full h-screen bg-red-100'
        >
          <div className='bg-blue-400 w-full flex justify-center'>
            <div className='w-[37em] h-[30em] self-center relative bg-green-400'>
              <div
                className='hidden sm:flex flex-col text-center 
                h-full bg-contain bg-center bg-no-repeat'
                style={{ backgroundImage: "url('./blackFrame.svg')" }}
              />
              <div className='absolute top-[4em] left-[3.5em]'>
                <div className='bg-gray-200 h-[22em] w-[30em]' />
              </div>
            </div>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default GameboyLayout;

{
  /* <p className='font-[Yantramanav] pt-4 text-2xl text-white stroke-slate-300 stroke-2'>
              GAME BOI <span className='text-xl'>ADVANCE</span>
            </p> */
}
