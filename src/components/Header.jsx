import { Link, NavLink } from 'react-router-dom'
import { navigations } from '../contant/navigations'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react'
import Hamburger from 'hamburger-react'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
  }

  

  return (
    <header className='fixed top-0 w-full h-16 bg-[#2c3e50] flex items-start'>

      <div className='container mx-auto px-5 flex items-center h-full '>

        {/* WebSite Logo */}
        <Link to={"/"}>
          <span className='text-xl font-bold text-indigo-50'>Movei <span className='text-blue-400'>Mind</span></span>
        </Link>

        {/* Menu Navigation */}
        <nav className='hidden md:flex items-center gap-6 ml-auto'> 
          {
            navigations.map((nav, index) => {
              return(
                <div key={index}>
                  <NavLink key={nav.label+index} to={nav.href} className={({isActive}) => `flex items-center gap-2 p-2 hover:bg-[#3498db] duration-150 ease-in rounded-xl ${isActive && "bg-[#3498db]"}`}>
                    {nav.label}
                    <div className='text-lg'>
                      {nav.icon}
                    </div>
                  </NavLink>
                </div>
              )
            })
          }
        </nav>


        {/* Mobile Hamburger Menu */}
        <div className='md:hidden ml-auto'>
          {/* Menu Button */}
          <Hamburger toggled={isOpen} toggle={setIsOpen} />

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='bottom'
            style={{backgroundColor:'#2c3e50e9'}}
          >
            <nav>
              {
                navigations.map((nav, index) => {
                  return(
                    <div key={nav.label + index}>
                      <NavLink
                        key={nav.label + index}
                        to={nav.href}
                        className={({isActive}) => `flex items-center gap-2 p-5 hover:bg-[#3498db] duration-150 ease-in rounded-xl ${isActive && "bg-[#3498db]"}`}

                      >
                        {nav.label}
                        {nav.icon}
                      </NavLink>
                    </div>
                  )
                })
              }
            </nav>


          </Drawer>


        </div>



      </div>

    </header>
  )
}

export default Header