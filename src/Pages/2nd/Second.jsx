import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Second() {
  return (
    <>
    <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/floors"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
      </div>
      <div className="md:container md:mx-auto pt-60 grid grid-cols-2 md:grid-cols-5 gaps-4">
          <div className='place-self-center'>
          <a href="second/imgcontainer2/accounting.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Accounting</a>
          </div>
          <div className='place-self-center'>
          <a href="second/imgcontainer2/ardoffice.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> ARD Office</a>
          </div>
          <div className='place-self-center'>
          <a href="second/imgcontainer2/budget.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Budget</a>
          </div>
          <div className='place-self-center'>
          <a href="second/imgcontainer2/coa.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> COA</a>
          </div>
          <div className='place-self-center'>
          <a href="second/imgcontainer2/hrdu.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> HRDU</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/hsimec.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> HSIMEC</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/legal.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Legal</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/msd.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> MSD</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/osm.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> OSM</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/planning.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Planning</a>
          </div>
          <div className='place-self-center mt-28 col-start-2'>
          <a href="second/imgcontainer2/pmu.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> PMU</a>
          </div>
          <div className='place-self-center md:mt-28'>
          <a href="second/imgcontainer2/procurement.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Procurement</a>
          </div>
          <div className='place-self-center mt-28'>
          <a href="second/imgcontainer2/rdoffice.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> RD Office</a>
          </div>
      </div>
    </>
  )
}

export default Second