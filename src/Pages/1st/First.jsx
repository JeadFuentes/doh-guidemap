import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function First() {
  return (
    <>
      <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
      </div>
      <div className="md:container md:mx-auto pt-60 grid md:grid-cols-5 gaps-2">
          <div className='place-self-center'>
          <a href="/first" className='p-6 rounded bg-green-600 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> 1st Floor</a>
          </div>
          <div className='place-self-center'>
          <a href="first/hrmo" className='p-6 rounded bg-green-600 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> HRMO</a>
          </div>
          <div className='place-self-center'>
          <a href="first/records" className='p-6 rounded bg-green-600 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> Records Section</a>
          </div>
          <div className='place-self-center'>
          <a href="fourth" className='p-6 rounded bg-green-600 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> 4th Floor</a>
          </div>
          <div className='place-self-center'>
          <a href="fourth" className='p-6 rounded bg-green-600 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> 4th Floor</a>
          </div>
      </div>
    </>
  )
}

export default First