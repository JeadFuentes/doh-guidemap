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
      <div className="md:container md:mx-auto pt-60 grid grid-cols-2 md:grid-cols-5 gaps-4">
          <div className='place-self-start col-span-2'>
          <a href="first/imgcontainer/hrmo.png" className='p-6 rounded bg-green-500 w-50 text-start font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (HRMO) Human Resource Management Office</a>
          </div>
          <div className='place-self-start'>
          <a href="first/imgcontainer/cashier.png" className='p-6 rounded bg-green-500 w-full text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> Cashier</a>
          </div>
          <div className='place-self-start col-span-2'>
          <a href="first/imgcontainer/resu.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (RESU) Regional Epidemilogy & Surveillance Unit</a>
          </div>
          <div className='place-self-start col-span-2 md:mt-24'>
          <a href="first/imgcontainer/hems.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (HEMS) Health Emergency Management Staff</a>
          </div>
          <div className='place-self-start md:mt-24'>
          <a href="first/imgcontainer/recordsection.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> Records Section</a>
          </div>
          <div className='place-self-start col-span-2 md:mt-24'>
          <a href="first/imgcontainer/bac.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (BAC) Bidding And Awards</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="first/imgcontainer/rledhrt.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (RLED HRT) Hospital Regulatory Team</a>
          </div>
          <div className='place-self-start mt-24'>
          <a href="first/imgcontainer/genserv.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> General Services</a>
          </div>
          <div className='place-self-start col-span-2 mt-24'>
          <a href="first/imgcontainer/rledohfrt.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (RLED) Other Health Facility Enforcement Division</a>
          </div>
          <div className='place-self-start col-start-2 col-span-2 mt-24'>
          <a href="first/imgcontainer/rledstaff.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> (RLED) Regutation and Licensing Enforcement Division</a>
          </div>
          <div className='place-self-start mt-24'>
          <a href="first/imgcontainer/supply.png" className='p-6 rounded bg-green-500 w-50 text-center font-bold text-xl text-white'>
          <FontAwesomeIcon icon={faBuilding} /> Supply</a>
          </div>
      </div>
    </>
  )
}

export default First