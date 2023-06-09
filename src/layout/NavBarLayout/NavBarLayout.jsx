import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/shared/NavBar/NavBar';

const NavBarLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default NavBarLayout;