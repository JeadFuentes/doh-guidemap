import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Floorselections from './Floorselections'
import First from './Pages/1st/First'
import Second from './Pages/2nd/Second'
import Third from './Pages/3rd/Third'
import Fourth from './Pages/4th/Fourth'
import Imgcontainer from './Pages/1st/Imgcontainer'
import Imgcontainer2 from './Pages/2nd/Imgcontainer2'
import Imgcontainer3 from './Pages/3rd/Imgcontainer3'

const App = () => {
  return (
    <>
    <body className='bg-green-50 h-screen'>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/floors" element={<Floorselections />}/>
      <Route path="/first" >
        <Route index element={<First/>}/>
        <Route path="imgcontainer/:id" element={<Imgcontainer />}/>
      </Route>
      <Route path="/second">
        <Route index element={<Second/>}/>
        <Route path="imgcontainer2/:id" element={<Imgcontainer2 />}/>
      </Route>
      <Route path="/third">
        <Route index element={<Third />}/>
        <Route path="imgcontainer3/:id" element={<Imgcontainer3 />}/>
      </Route>
      <Route path="/fourth" element={<Fourth />}/>
    </Routes>
    </body>
    </>
  )
}

export default App