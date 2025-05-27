import { Route, Routes } from 'react-router-dom'

import './bootstrap.min.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/history' element={<History/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App