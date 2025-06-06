import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';


function App() {

  

  return (
    <div className='text-white'>
      
      <Header/>
      
      <div className='pt-16 min-h-[100vh] bg-[url(./images/background.jpg)] bg-[100%_100%] bg-cover'>
        <Outlet/>
      </div>

      <Footer/>
      <ToastContainer />
    </div> 
  )
}

export default App
