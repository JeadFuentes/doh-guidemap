import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Fourth() {
  return (
    <>
    <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
    </div>
    <div className='grid pt-40'>
        <div className='place-self-center text-2xl text-center w-90 h-90'>
            <img src="img/uc.jpg" alt="404" />
            <img src="floor-images/1/hrmo.png" alt="" />
        </div>
        <p className='place-self-center text-4xl text-center text-red-600 pt-6'>SORRY STILL UNDER CONSTRUCTION</p>
    </div>
    </>
  )
}

export default Fourth