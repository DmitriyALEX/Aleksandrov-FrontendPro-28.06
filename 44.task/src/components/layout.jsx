import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
       <Link to='/users'>
            <b>Get Users</b>
       </Link>
       <p>
       <Link to='/'>
          <b>Go to HomePage</b>
       </Link>
       </p>
       <Outlet /> 
    </div>
  )
}

export default Layout