import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './ShowMenu.css';

const ShowMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='toggleMenuContainer'>
            {/* set ảnh account của bản thân */}
            <div className='toggleMenuContainer-image'>
                <img
                    src='https://cdn-icons-png.flaticon.com/128/2945/2945408.png'
                    alt=''
                    onClick={toggleMenu}
                />
            </div>
            {showMenu && (
                <div className='menu'>
                    <ul>
                        {/* Menu items */}
                        <li>
                            <div className='menu-image'>
                                {/* ảnh account */}
                                <Link to='/InformationPage'>
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/128/2945/2945408.png'
                                        alt=''
                                    />
                                </Link>
                            </div>
                            <div className='menu-text'><b>UCHIHA ITACHI</b></div> 
                        </li>
                        <li>
                            <div className='menu-text'>
                                <Link to="/ManageAccount">アカウントを管理</Link>
                            </div>
                            <div className='menu-icon'><img className='image' src='https://cdn-icons-png.flaticon.com/128/875/875100.png' alt='' /></div>
                        </li>
                        <li>
                            <div className='menu-text'>
                                <Link to="/SignUpPage">ログアウト</Link>
                            </div>                            
                            <div className='menu-icon'><img className='image' src='https://cdn-icons-png.flaticon.com/128/10015/10015437.png' alt='' /></div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ShowMenu;
