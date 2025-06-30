/*import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const Nav=()=>{
   const auth=localStorage.getItem('user');
   const navigate=useNavigate();
   const logout=()=>{
      localStorage.clear();
      navigate('/signup');
   }
    return(
     <div>
      <img alt='logo' className='log'
      src='https://tse2.mm.bing.net/th?id=OIP.RYsKHqksC3450NQnxSYt-wHaFP&pid=Api&P=0&h=220'/>
       { auth ? <ul className="nav-ul">
          <li><Link to="/">Property List</Link></li>
          <li><Link to="/add">Add Property</Link></li>
          <li><Link to="/update">Update Property</Link></li>
          
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
          
       </ul>
       :
       <ul className='nav-ul nav-right'>
          <li><Link  to="/signup">Sign Up</Link></li>
          <li><Link  to="/login">Login</Link></li>
       </ul>
}
     </div> 
    )
}

export default Nav;*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    return (
        <div>
            <img
                alt='logo'
                className='log'
                src='https://tse2.mm.bing.net/th?id=OIP.RYsKHqksC3450NQnxSYt-wHaFP&pid=Api&P=0&h=220'
            />
            {
                auth ? (
                    <ul className="nav-ul">
                        <li><Link to="/">Property List</Link></li>
                        <li><Link to="/add">Add Property</Link></li>
                        {/* Removed direct /update route */}
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                    </ul>
                ) : (
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                )
            }
        </div>
    );
};

export default Nav;
