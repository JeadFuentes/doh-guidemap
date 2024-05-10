import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Floorselections from './Floorselections'
import First from './Pages/1st/First'
import Hrmo from './Pages/1st/Hrmo'
import Second from './Pages/2nd/Second'
import Third from './Pages/3rd/Third'
import Fourth from './Pages/4th/Fourth'
import Records from './Pages/1st/Records'

const App = () => {
  return (
    <>
    <body className='bg-green-100 h-screen'>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/floors" element={<Floorselections />}/>
      <Route path="/first" >
        <Route index element={<First/>}/>
        <Route path="hrmo" element={<Hrmo />}/>
        <Route path="records" element={<Records />}/>
      </Route>
      <Route path="/second" element={<Second/>}/>
      <Route path="/third" element={<Third />}/>
      <Route path="/fourth" element={<Fourth />}/>
    </Routes>
    </body>
    </>
  )
}

export default App