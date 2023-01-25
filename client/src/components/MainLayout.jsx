import React,{useEffect} from 'react'

import { Outlet, useLocation } from "react-router-dom";
import Navbar from './Navbar';

 const MainLayout = () => {


  const ScrollToTop = () => {
    const { pathname } =useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
    return (
        <React.Fragment>
          <ScrollToTop/>
            <div className='container mx-auto'>
                <Navbar />
               <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default MainLayout