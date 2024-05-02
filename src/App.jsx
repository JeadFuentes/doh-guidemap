import React from 'react'
import Dashboard from './Pages/Dashboard'
import Floorselections from './Floorselections'

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center opacity-25 fixed top-0 left-0 right-0 down-0" style={{ backgroundImage:  `url("img/bg-img.png")`, backgroundSize: 'cover', height: 1000 }}></div>
    {/*<Dashboard />*/}
    <Floorselections />
    </>
  )
}

export default App