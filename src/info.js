import React, { useState, useEffect, Component } from 'react';
import './App.css';
import './assets/css/style.css';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';

function Info({ }) {

    const [waxPrice,setwaxPrice] = useState('')
    const [hwbPrice,sethwbPrice] = useState('')
    var wax_price = ''
    let wax_val = ''
    var hwb_price = ''

    useEffect (() =>{

        async function getWax() {
          try{
            let all_tokens = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd");
           
            all_tokens = await all_tokens.json();
            wax_price = all_tokens
            console.log(wax_price.wax.usd)
            console.log(all_tokens.status === 200)
            if (all_tokens != undefined) {
              setwaxPrice(wax_price.wax.usd)
            }
            return all_tokens;
           
          }catch(e) {
            console.log('Error: ', e)
            return ('Error:' + e)
          }
        }
        async function sendWax() {
          try{
            if (wax_price == ''){
              return getWax()
            }else{
              return wax_price;
            }
          
          }catch(e) {
            console.log('Error: ', e)
            return ('Error:' + e)
          }
        }
        async function getHWB() {
          try{
            let all_tokens = await fetch("https://wax.alcor.exchange/api/markets/636");
            all_tokens = await all_tokens.json();
            wax_price = all_tokens
            console.log(wax_price.last_price)
            if (all_tokens != undefined) {
              sethwbPrice(Math.round(wax_price.last_price* 100) / 100)
            }
            return all_tokens.last_price;
          }catch(e) {
            console.log('Error: ', e)
            return ('Error:' + e)
          }
        }
        async function sendHWB() {
          try{
            if (hwb_price == ''){
              return getHWB()
            }else{
              return hwb_price;
            }
          
          }catch(e) {
            console.log('Error: ', e)
            return ('Error:' + e)
          }
        }
  
        let wax = sendWax().then((responseJSON) => {
      // do stuff with responseJSON here...
      wax_val = responseJSON
    });
  
  let hwb_val = ''
  let hwb = sendHWB().then((responseJSON) => {
      // do stuff with responseJSON here...
      hwb_val = responseJSON
    });
  
    }, [])



  return (
    
    <div className="App">
        <header className="header" data-header>
  
  <div className="container">

    <a href="/#" className="logo">
    <Link to="/#"><img src="./favicon.png" width="32" height="32" alt="Cryptex logo"></img></Link>
      

    </a>

    <nav className="navbar" data-navbar>
      <ul className="navbar-list">

        <li className="navbar-item">
            <Link to="/#" className="navbar-link" data-nav-link>Home</Link>
        </li>

        <li className="navbar-item">
          <a href="https://play.hackersworld.io/account" target="_blank" className="navbar-link" data-nav-link>Play</a>
        </li>

        <li className="navbar-item">
          <a href="https://hackersworld.io/" target="_blank" className="navbar-link" data-nav-link>Main Site</a>
        </li>

        <li className="navbar-item">
          <a href="https://whitepaper.hackersworld.io/welcome-to-hackersworld/how-to-play" target="_blank" className="navbar-link" data-nav-link>Whitepaper</a>
        </li>

        <li className="navbar-item">
            <Link to="/info" className="navbar-link" data-nav-link>Infographics</Link>
        </li>

        <li className="navbar-item">
            <Link to="/price" className="navbar-link" data-nav-link>Price Watch</Link>
        </li>

        <li className="navbar-item">
          <a href="https://wax.alcor.exchange/trade/hwb-hackerstoken_wax-eosio.token" target="_blank" className="navbar-link" data-nav-link>HWB/WAX: {hwbPrice}</a>
        </li>

        <li className="navbar-item">
          <a href="https://www.coingecko.com/en/coins/wax" className="navbar-link" target="_blank" data-nav-link>WAX/USDT: {waxPrice}</a>
        </li>

        

        {/* <li className="navbar-item">
          <a href="# " className="navbar-link" data-nav-link>Buy Wax</a>
        </li> */}


      </ul>
    </nav>

    <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
      <span className="line line-1"></span>
      <span className="line line-2"></span>
      <span className="line line-3"></span>
    </button>

    <a href="# " className="btn btn-outline">Donations :) --> 4r1fy.wam</a>

  </div>
</header>
<div className='img_container'>
    <h1>Tools Information</h1>
    <img src="./tools_info.png" width="32" height="32" alt="tools_info"></img>
    <h1>Mechanics Flow Chart</h1>
    <img src="./flow_chart.png" width="32" height="32" alt="tools_info"></img>
</div>
       
<footer className="footer">
            <p>With &hearts; from Mekii</p>
    </footer>
    </div>
    
  );
}

export default Info;
