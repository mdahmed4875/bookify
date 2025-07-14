import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './pages/Register'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import MyNavbar from './components/MyNavbar'
import List from './pages/List'
import Home from './pages/Home'
import Detail from './pages/Detail'



function App() {
 

  return (
    <div>
      <MyNavbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>} />
      <Route path="/book/list" element={<List/>} />
      <Route path="/book/view/:bookId" element={<Detail/>} />
   </Routes>
    </div>
  )
}

export default App
