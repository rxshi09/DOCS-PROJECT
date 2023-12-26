import React from 'react'
function Background() {
  return (
    <>
    <div>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full py-10 absolute top-[5%] font-semibold justify-center align-center flex text-zinc-700'>Documents</div>
        <div className='text-neutral-50 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl tracking-tighter opacity-25 '>Docs.</div>
      </div>
    </div>
    </>
  )
}

export default Background
