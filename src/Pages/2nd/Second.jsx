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
          <div className='place-self-start col-span-2'>
          <a href="second/imgcontainer2/ardoffice.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (ARD) Assistant Regional Director's Office</a>
          </div>
          <div className='place-self-start'>
          <a href="second/imgcontainer2/accounting.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Accounting</a>
          </div>
          <div className='place-self-start col-span-2'>
          <a href="second/imgcontainer2/coa.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (COA) Commission on Audit</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="second/imgcontainer2/hrdu.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (HRDU) Human Resource Development Unit</a>
          </div>
          <div className='place-self-start mt-24'>
          <a href="second/imgcontainer2/budget.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Budget</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="second/imgcontainer2/msd.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (MSD) Management Support Division Office</a>
          </div>
          <div className='place-self-start col-span-3 mt-24'>
          <a href="second/imgcontainer2/hsimec.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (HSIMEC) Health Systems Implementation, Monitoring and Evaluation Cluster</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="second/imgcontainer2/osm.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (OSM) Office for Strategy Management</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="second/imgcontainer2/rdoffice.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (RD) Regional Director's Office</a>
          </div>
          <div className='place-self-start mt-24'>
          <a href="second/imgcontainer2/legal.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Legal</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="second/imgcontainer2/pmu.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> (PMU) Project Monitoring Unit</a>
          </div>
          <div className='place-self-start col-start-2 mt-24'>
          <a href="second/imgcontainer2/planning.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Planning</a>
          </div>
          <div className='place-self-start md:mt-24'>
          <a href="second/imgcontainer2/procurement.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
            <FontAwesomeIcon icon={faBuilding} /> Procurement</a>
          </div>
      </div>
    </>
  )
}

export default Second