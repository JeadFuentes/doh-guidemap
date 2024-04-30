import React from 'react'

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center opacity-10 fixed top-0 left-0 right-0 down-0" style={{ backgroundImage:  `url("img/bg-img.jpg")`, backgroundSize: 'cover', height: 1000 }}></div>
      <div className='grid pt-14'>
          <img src="img/doh-logo.png" alt="DOH" srcset="" className='h-32 place-self-center'/> 
          <p className='pt-14 mt-10 place-self-center text-2xl'>WELCOME TO</p>
          <p className='pt-2 text-5xl place-self-center font-extrabold'>DEPARTMENT OF HEALTH</p>
          <p className='pt-2 text-2xl place-self-center font-bold'>HOW CAN WE HELP YOU?</p>
          <a href="" className='mt-36 p-4 place-self-center rounded-full bg-teal-500 w-80 text-center align-middle font-extrabold italic'>NEXT</a>
      </div>
    </>
  )
}

export default App