import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function First() {
  return (
    <>
      <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/floors"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
      </div>
      <div className="md:container md:mx-auto pt-48 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/hrmo.png">
          <FontAwesomeIcon icon={faBuilding} /> (HRMO) Human Resource Management Office</a>
          </div>
          <div className='place-self-start w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/cashier.png">
          <FontAwesomeIcon icon={faBuilding} /> Cashier</a>
          </div>
          <div className='place-self-start col-span-2 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/resu.png">
          <FontAwesomeIcon icon={faBuilding} /> (RESU) Regional Epidemilogy & Surveillance Unit</a>
          </div>
          <div className='place-self-start col-span-2 md:mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/hems.png">
          <FontAwesomeIcon icon={faBuilding} /> (HEMS) Health Emergency Management Staff</a>
          </div>
          <div className='place-self-start md:mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/recordsection.png">
          <FontAwesomeIcon icon={faBuilding} /> Records Section</a>
          </div>
          <div className='place-self-start col-span-2 md:mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/bac.png">
          <FontAwesomeIcon icon={faBuilding} /> (BAC) Bidding And Awards</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/rledhrt.png">
          <FontAwesomeIcon icon={faBuilding} /> (RLED HRT) Hospital Regulatory Team</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/genserv.png">
          <FontAwesomeIcon icon={faBuilding} /> General Services</a>
          </div>
          <div className='place-self-start col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/rledohfrt.png">
          <FontAwesomeIcon icon={faBuilding} /> (RLED) Other Health Facility Enforcement Division</a>
          </div>
          <div className='place-self-start col-start-2 col-span-2 mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/rledstaff.png">
          <FontAwesomeIcon icon={faBuilding} /> (RLED) Regutation and Licensing Enforcement Division</a>
          </div>
          <div className='place-self-start mt-14 w-full p-6 rounded bg-green-500 text-center font-bold text-xl text-white'>
          <a href="first/imgcontainer/supply.png">
          <FontAwesomeIcon icon={faBuilding} /> Supply</a>
          </div>
      </div>
    </>
  )
}

export default First