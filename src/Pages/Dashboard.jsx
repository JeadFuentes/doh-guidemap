import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='grid pt-2'>
        <img src="img/guidemap.png" alt="DOH" srcset="" className='h-80 place-self-center'/> 
        <p className='pt-2 mt-2 place-self-center text-2xl'>WELCOME TO</p>
        <p className='my-2 p-2 text-5xl place-self-center font-extrabold border-y-2 border-green-700'>DEPARTMENT OF HEALTH</p>
        <p className='pt-2 text-2xl place-self-center font-bold'>HOW CAN WE HELP YOU?</p>
        <a href="" className='mt-36 p-4 place-self-center rounded-full bg-amber-600 w-80 text-center align-middle font-extrabold italic text-4xl text-white'>NEXT</a>
    </div>
    </>
  )
}

export default Dashboard