import React from 'react';
import SearchBar from 'material-ui-search-bar';
import './Header.css';
import Logo from '../../Logo.png';
import { Button } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
const Header = () => {

   return (
      <div  className="home-content">
         <div style={{ display: 'flex'}}>
         <div>
            <img src={Logo} alt="slideBar icon" className="logo" />

         </div>
         <div className="form">

            <SearchBar
               onChange={() => console.log('onChange')}
               onRequestSearch={() => console.log('onRequestSearch')}
               style={{
                  margin: '0 auto',
                  maxWidth: 800
               }}
            ></SearchBar>
         </div>
         <div className="nav">
            <nav>
               <p>News</p>
               <p>Destination</p>
               <p>Blog</p>
               <p>Contact</p>
            </nav>
         </div>
         <div style={{ marginTop: '50px', marginLeft: '50px' }}>

            <Button variant="contained" color="secondary">
               log in
           </Button>
         </div>
         </div> 
        <div>
           <MainContent/> 
        </div> 
      </div>
   );
};

export default Header;