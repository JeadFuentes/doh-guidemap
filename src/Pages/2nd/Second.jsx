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
      <div className="md:container md:mx-auto pt-48 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/ardoffice.png">
            <FontAwesomeIcon icon={faBuilding} /> (ARD) Assistant Regional Director's Office</a>
          </div>
          <div className='place-self-start w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/accounting.png">
            <FontAwesomeIcon icon={faBuilding} /> Accounting</a>
          </div>
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/coa.png">
            <FontAwesomeIcon icon={faBuilding} /> (COA) Commission on Audit</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/hrdu.png">
            <FontAwesomeIcon icon={faBuilding} /> (HRDU) Human Resource Development Unit</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/budget.png">
            <FontAwesomeIcon icon={faBuilding} /> Budget</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/msd.png">
            <FontAwesomeIcon icon={faBuilding} /> (MSD) Management Support Division Office</a>
          </div>
          <div className='place-self-start col-span-3 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/hsimec.png">
            <FontAwesomeIcon icon={faBuilding} /> (HSIMEC) Health Systems Implementation, Monitoring and Evaluation Cluster</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/osm.png">
            <FontAwesomeIcon icon={faBuilding} /> (OSM) Office for Strategy Management</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/rdoffice.png">
            <FontAwesomeIcon icon={faBuilding} /> (RD) Regional Director's Office</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/legal.png">
            <FontAwesomeIcon icon={faBuilding} /> Legal</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/pmu.png">
            <FontAwesomeIcon icon={faBuilding} /> (PMU) Project Monitoring Unit</a>
          </div>
          <div className='place-self-start col-start-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/planning.png">
            <FontAwesomeIcon icon={faBuilding} /> Planning</a>
          </div>
          <div className='place-self-start md:mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="second/imgcontainer2/procurement.png">
            <FontAwesomeIcon icon={faBuilding} /> Procurement</a>
          </div>
      </div>
    </>
  )
}

export default Second