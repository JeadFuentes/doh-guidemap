import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

function Floorselections() {
  return (
    <>
    <div className="fixed top-0 left-0 p-4">
      <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
      <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
      </button>
    </div>
    <div className="pt-60 grid md:grid-cols-2 gap-32">
        <div className='place-self-center md:place-self-end'>
        <a href="/first" className='mt-36 p-10 rounded bg-green-600 w-80 text-center align-middle font-bold text-2xl text-white'>
          <FontAwesomeIcon icon={faLayerGroup} /> 1st Floor</a>
        </div>
        <div className='place-self-center md:place-self-start'>
        <a href="/second" className='mt-36 p-10 rounded bg-green-600 w-80 text-center align-middle font-bold text-2xl text-white'>
        <FontAwesomeIcon icon={faLayerGroup} /> 2nd Floor</a>
        </div>
        <div className='place-self-center md:place-self-end'>
        <a href="third" className='mt-36 p-10 rounded bg-green-600 w-80 text-center align-middle font-bold text-2xl text-white'>
        <FontAwesomeIcon icon={faLayerGroup} /> 3rd Floor</a>
        </div>
        <div className='place-self-center md:place-self-start'>
        <a href="fourth" className='mt-36 p-10 rounded bg-green-600 w-80 text-center align-middle font-bold text-2xl text-white'>
        <FontAwesomeIcon icon={faLayerGroup} /> 4th Floor</a>
        </div>
    </div>
    </>
  )
}

export default Floorselections