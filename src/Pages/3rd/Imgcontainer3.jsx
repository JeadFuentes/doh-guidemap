import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch'

function Imgcontainer3() {
    const { id } = useParams()
  return (
    <>
    <body>
    <div className="fixed top-0 left-0 p-4">
        <button className="bg-amber-100 border-2 border-amber-600 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/third"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
    </div>
    <div className="fixed top-20 left-2 p-4 bg-green-200 border-2 border-green-600">
        <button className="bg-green-500 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/first"> Zoom <FontAwesomeIcon icon={faMagnifyingGlassPlus} /></Link>
        </button>
        <br />
        <button className="bg-green-500 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center">
        <Link to="/first"> Zoom <FontAwesomeIcon icon={faMagnifyingGlassMinus} /></Link>
        </button>
    </div>
    <div className='place-self-center text-2xl text-center mx-auto pt-52 md:pt-0 md:ml-56' style={{width: "80%"}}>
      <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={100}>
          <TransformComponent>
              <img src={(`/floor-images/3/${id}`)} alt="Opps" style={{width: "85%"}}/>
          </TransformComponent>
        </TransformWrapper>
    </div>
    </body>
    </>
  )
}

export default Imgcontainer3