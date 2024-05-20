import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Third() {
  return (
    <>
    <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/floors"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
      </div>
      <div className="md:container md:mx-auto pt-48 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/cmu.png">
            <FontAwesomeIcon icon={faBuilding} /> (CMU) Communication Management Unit</a>
          </div>
          <div className='place-self-start w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/familyhealth.png">
            <FontAwesomeIcon icon={faBuilding} /> Family Health</a>
          </div>
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/hfdc.png">
            <FontAwesomeIcon icon={faBuilding} /> (HFDU) Health facility Development Unit</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/hfep.png">
            <FontAwesomeIcon icon={faBuilding} /> (HFEP) Health Facility Enhancement Program</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/hpu.png">
            <FontAwesomeIcon icon={faBuilding} /> (HPU) Health Promotion Unit</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/infectious.png">
            <FontAwesomeIcon icon={faBuilding} /> INFECTIOUS</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/hsdc.png">
            <FontAwesomeIcon icon={faBuilding} /> (HSDC) Health System Development Cluster</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/km.png">
            <FontAwesomeIcon icon={faBuilding} /> (KM) Knowledge Management UNIT</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/lhsdconference.png">
            <FontAwesomeIcon icon={faBuilding} /> LHSD CONFERENCE</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/lhsdstaff.png">
            <FontAwesomeIcon icon={faBuilding} /> LHSD OFFICE</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/maip.png">
            <FontAwesomeIcon icon={faBuilding} /> (MAIP) Medical Assistance to Indigent Patients</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="third/imgcontainer3/noncom.png">
            <FontAwesomeIcon icon={faBuilding} /> (NON-COM) Non-comunicable Diseases</a>
          </div>
      </div>
    </>
  )
}

export default Third