import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/home/Home'
import AboutPage from './pages/about/About'
import GerbPage from './pages/gerb/Gerb'
import ConsPage from './pages/cons/Cons'
import SumPage from './pages/sum/Sum'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route index element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/plan' element={<GerbPage/>}/>  
          <Route path='/sum' element={<SumPage/>}/>
          <Route path='/cons' element={<ConsPage/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
