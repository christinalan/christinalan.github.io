import {useState} from 'react'
import './root.css';
import { Outlet, Link, useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import About from '../components/About'

const Root = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const navigate = useNavigate();

  // const handleVisibility = () =>{
  //   setMenuVisible(false);
  // }
  const isMobile = window.innerWidth <= 768; 

  const handleAboutInfo = () => {
    navigate('/');
  }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="full-app flex flex-col items-stretch sm:flex-row sm:justify-start sm:items-start">
          <div className="header">
            <Link to={`/`}></Link>
          <div className="menu flex flex-col">
              <div onClick={() => setMenuVisible(true)} 
                  className={`${isMenuVisible ? 'h-1' : 'h3'} toolbar flex px-2`}>
                  <Toolbar >
                  <div className={`${isMobile ? (isMenuVisible ? 'invisible fixed' : 'visible relative') : 'invisible'}`}>
                    <MenuIcon />
                    </div>
                </Toolbar>
            </div>
            <nav className={`${isMenuVisible ? 'visible relative' : 'invisible fixed'} flex flex-col max-w-md sm:w-96 lg:w-screen items-stretch px-4 sm:px-8 mx-2 sm:mt-10`}>
                <ul className="ml-0 px-0 text-2xl sm:text-xl list-none" onClick={() => isMobile ? setMenuVisible(false) : setMenuVisible(true)}>
                    <Link className="navLink" to={`/`} onClick={handleAboutInfo}><li>About</li></Link>
                    <Link className="navLink" to={`maplibs`}><li>Maplibs</li></Link>
                    <Link className="navLink" to={`birbs`}><li>Birbs</li></Link>
                </ul>
              </nav>
  
          </div>
          </div>

            <div className="project-content py-3 px-5 mt-5 sm:mt-8">
            <div className="link-content">
                  <Outlet />
                  {window.location.pathname === '/' && (<About />)}
              </div>
            </div>
          </div>
      </Box>
      );
}

export default Root;