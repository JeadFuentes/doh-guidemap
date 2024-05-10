import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Hrmo() {
  return (
    <>
    <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/first/"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
    </div>
    <div className='place-self-center text-2xl text-center bg-green-100'>
        <img src="/floor-images/1/hrmo.png" alt="Records" />
    </div>
    </>
  )
}

export default Hrmo