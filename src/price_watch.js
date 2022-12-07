import React, { useState, useEffect, Component } from 'react';
import './App.css';
import './assets/css/style.css';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';

function Price({ }) {

    const [waxPrice,setwaxPrice] = useState('')
    const [hwbPrice,sethwbPrice] = useState('')
    const [myArray, setMyArray] = useState([]);
    const [access_Price,Set_access_Price] = useState('')
    const [sv_leg_Price,Set_sv_leg_Price] = useState('')
    const [sv_epic_price,Set_sv_epic_Price] = useState('')
    var wax_price = ''
    let wax_val = ''
    var hwb_price = ''
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

     function calculateWax(price) {
        return Math.round(hwbPrice * price)
    }

    let sv_leg = 10000
    let sv_leg_pass = 9500
    let sv_leg_wax = calculateWax(sv_leg)
    let sv_leg_pass_wax = calculateWax(sv_leg_pass)

    let sv_epic = 3400
    let sv_epic_pass = 3230
    let sv_epic_wax = calculateWax(sv_epic)
    let sv_epic_pass_wax = calculateWax(sv_epic_pass)

    let sv_rare = 1150
    let sv_rare_pass = 1092.5
    let sv_rare_wax = calculateWax(sv_rare)
    let sv_rare_pass_wax = calculateWax(sv_rare_pass)

    let sv_uc = 400
    let sv_uc_pass = 380
    let sv_uc_wax = calculateWax(sv_uc)
    let sv_uc_pass_wax = calculateWax(sv_uc_pass)

    let sv_c = 125
    let sv_c_pass = 118.75
    let sv_c_wax = calculateWax(sv_c)
    let sv_c_pass_wax = calculateWax(sv_c_pass)

    let fw_leg = 20000
    let fw_leg_pass = 19000
    let fw_leg_wax = calculateWax(fw_leg)
    let fw_leg_pass_wax = calculateWax(fw_leg_pass)

    let fw_epic = 8000
    let fw_epic_pass = 7600
    let fw_epic_wax = calculateWax(fw_epic)
    let fw_epic_pass_wax = calculateWax(fw_epic_pass)

    let fw_rare = 2700
    let fw_rare_pass = 2565
    let fw_rare_wax = calculateWax(fw_rare)
    let fw_rare_pass_wax = calculateWax(fw_rare_pass)

    let fw_uc = 900
    let fw_uc_pass = 855
    let fw_uc_wax = calculateWax(fw_uc)
    let fw_uc_pass_wax = calculateWax(fw_uc_pass)

    let fw_c = 300
    let fw_c_pass = 285
    let fw_c_wax = calculateWax(fw_c)
    let fw_c_pass_wax = calculateWax(fw_c_pass)

    let cc_leg = 20000
    let cc_leg_pass = 19000
    let cc_leg_wax = calculateWax(fw_leg)
    let cc_leg_pass_wax = calculateWax(fw_leg_pass)

    let cc_epic = 8000
    let cc_epic_pass = 7600
    let cc_epic_wax = calculateWax(fw_epic)
    let cc_epic_pass_wax = calculateWax(fw_epic_pass)

    let cc_rare = 2700
    let cc_rare_pass = 2565
    let cc_rare_wax = calculateWax(fw_rare)
    let cc_rare_pass_wax = calculateWax(fw_rare_pass)

    let cc_uc = 900
    let cc_uc_pass = 855
    let cc_uc_wax = calculateWax(fw_uc)
    let cc_uc_pass_wax = calculateWax(fw_uc_pass)

    let cc_c = 300
    let cc_c_pass = 285
    let cc_c_wax = calculateWax(fw_c)
    let cc_c_pass_wax = calculateWax(fw_c_pass)

    let av_epic = 6750
    let av_epic_pass = 6412.5
    let av_epic_wax = calculateWax(av_epic)
    let av_epic_pass_wax = calculateWax(av_epic_pass)

    let av_rare = 2250
    let av_rare_pass = 2137.5
    let av_rare_wax = calculateWax(av_rare)
    let av_rare_pass_wax = calculateWax(av_rare_pass)

    let av_uc = 750
    let av_uc_pass = 712.5
    let av_uc_wax = calculateWax(av_uc)
    let av_uc_pass_wax = calculateWax(av_uc_pass)

    let av_c = 250
    let av_c_pass = 237.5
    let av_c_wax = calculateWax(av_c)
    let av_c_pass_wax = calculateWax(av_c_pass)

    let rw_epic = 5000
    let rw_epic_pass = 4750
    let rw_epic_wax = calculateWax(rw_epic)
    let rw_epic_pass_wax = calculateWax(rw_epic_pass)

    let rw_rare = 1700
    let rw_rare_pass = 1615
    let rw_rare_wax = calculateWax(rw_rare)
    let rw_rare_pass_wax = calculateWax(rw_rare_pass)

    let rw_uc = 580
    let rw_uc_pass = 551
    let rw_uc_wax = calculateWax(rw_uc)
    let rw_uc_pass_wax = calculateWax(rw_uc_pass)

    let rw_c = 200
    let rw_c_pass = 190
    let rw_c_wax = calculateWax(rw_c)
    let rw_c_pass_wax = calculateWax(rw_c_pass)

  

    let template_array = [583342,
                            583362,583361,583360,583359,583358,
                            583357,583356,583355,583354,583353,
                            583352,583351,583350,583349,583348,
                            583346,583345,583344,583343,
                            610033,610032,610030,610028]
    let price_array = []
    
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
              sethwbPrice(wax_price.last_price* 100 / 100)
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
    async function getAH_price(template_id) {
        try{
          let price = await fetch("https://wax-atomic-api.eosphere.io/atomicmarket/v2/sales?state=1&template_id=" + template_id + "&page=1&limit=1&max_assets=1&order=asc&sort=price");
          price = await price.json();
          //console.log(price)
          if(price.data.length == 0){
            return 'N/A'
          }
          else{
            //console.log(price.data[0].price.amount / 100000000)
            return Math.round(price.data[0].price.amount / 100000000);
          }

        }catch(e) {
          console.log('Error: ', e)
          return ('Error:')
        }
      }

    async function runPrice(){
        let i = 0
        for (let i = 0;i < template_array.length;i++){
            let price = getAH_price(template_array[i]).then((responseJSON) => {
                // do stuff with responseJSON here...
                price = responseJSON
                //console.log(price)
                price_array.push(price)
                
                //
                //setMyArray(price)
            });
            await delay(250)
        }
        copyArray()
    }
    
    function copyArray(){
        setMyArray([...price_array]);
    }
    runPrice()

  
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
</header>\market

<div className='price_page'>
    <div className='price_container' style={{marginTop:'100px'}}>
        <div className='display_container'>
            <h1 className='tool_name'>Access Granted Pass</h1>
            <img src="./assets/access_granted.webp" width="32" height="32" alt="tools_info"></img>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583342" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[0]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
    <div className='price_container'>
        <div className='display_container'>
            <h1 className='tool_name'>SV: Legendary</h1>
            <img src="./assets/sv_leg.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {sv_leg} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_leg_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {sv_leg_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_leg_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583362" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[1]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>SV: Epic</h1>
            <img src="./assets/sv_epic.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {sv_epic} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_epic_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {sv_epic_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_epic_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583361" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[2]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>SV: Rare</h1>
            <img src="./assets/sv_rare.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {sv_rare} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_rare_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {sv_rare_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_rare_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583360" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[3]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>SV: Uncommon</h1>
            <img src="./assets/sv_uc.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {sv_uc} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_uc_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {sv_uc_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_uc_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583359" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[4]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>SV: Common</h1>
            <img src="./assets/sv_c.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {sv_c} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_c_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {sv_c_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {sv_c_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583358" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[5]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
    <div className='price_container'>
        <div className='display_container'>
            <h1 className='tool_name'>FW: Legendary</h1>
            <img src="./assets/fw_leg.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {fw_leg} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_leg_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {fw_leg_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_leg_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583357" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[6]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>FW: Epic</h1>
            <img src="./assets/fw_epic.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {fw_epic} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_epic_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {fw_epic_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_epic_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583356" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[7]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>FW: Rare</h1>
            <img src="./assets/fw_rare.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {fw_rare} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_rare_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {fw_rare_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_rare_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583355" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[8]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>FW: Uncommon</h1>
            <img src="./assets/fw_uc.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {fw_uc} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_uc_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {fw_uc_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_uc_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583354" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[9]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>FW: Common</h1>
            <img src="./assets/fw_c.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {fw_c} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_c_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {fw_c_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {fw_c_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583353" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[10]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
    <div className='price_container'>
        <div className='display_container'>
            <h1 className='tool_name'>cracker: Legendary</h1>
            <img src="./assets/cracker_leg.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {cc_leg} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_leg_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {cc_leg_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_leg_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583352" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[11]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>cracker: Epic</h1>
            <img src="./assets/cracker_epic.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {cc_epic} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_epic_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {cc_epic_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_epic_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583351" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[12]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>cracker: Rare</h1>
            <img src="./assets/cracker_rare.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {cc_rare} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_rare_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {cc_rare_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_rare_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583350" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[13]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>cracker: Uncommon</h1>
            <img src="./assets/cracker_uc.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {cc_uc} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_uc_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {cc_uc_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_uc_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583349" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[14]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>cracker: Common</h1>
            <img src="./assets/cracker_c.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {cc_c} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_c_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {cc_c_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {cc_c_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583348" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[15]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
    <div className='price_container'>
        <div className='display_container'>
            <h1 className='tool_name'>AV: Epic</h1>
            <img src="./assets/av_epic.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {av_epic} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_epic_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {av_epic_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_epic_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583346" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[16]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>AV: Rare</h1>
            <img src="./assets/av_rare.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {av_rare} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_rare_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {av_rare_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_rare_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583345" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[17]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>AV: Uncommon</h1>
            <img src="./assets/av_uc.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {av_uc} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_uc_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {av_uc_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_uc_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583344" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[18]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>AV: Common</h1>
            <img src="./assets/av_c.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {av_c} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_c_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {av_c_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {av_c_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=583343" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[19]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
    <div className='price_container'>
        <div className='display_container'>
            <h1 className='tool_name'>RW: Epic</h1>
            <img src="./assets/rw_epic.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {rw_epic} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_epic_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {rw_epic_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_epic_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=610033" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[20]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>RW: Rare</h1>
            <img src="./assets/rw_rare.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {rw_rare} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_rare_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {rw_rare_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_rare_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=610032" target="_blank" href="https://wax.alcor.exchange/trade/hwb-hackerstoken_wax-eosio.token" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[21]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>RW: Uncommon</h1>
            <img src="./assets/rw_uc.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {rw_uc} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_uc_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {rw_uc_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_uc_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=610030" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[22]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
        <div className='display_container'>
            <h1 className='tool_name'>RW: Common</h1>
            <img src="./assets/rw_c.webp" width="32" height="32" alt="tools_info"></img>
            <h1 className='craft_price'>Craft Price : <span>&nbsp; {rw_c} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_c_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <h1 className='craft_price'>With Pass : <span>&nbsp; {rw_c_pass} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>B</span></h1>
            <h1 className='craft_price_wax'>Wax : <span>&nbsp; {rw_c_pass_wax} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></h1>
            <a href="https://wax.atomichub.io/market?order=asc&sort=price&symbol=WAX&template_id=610028" target="_blank" className='ah_price'>Atomic : <span>&nbsp; {myArray[23]} &nbsp;</span><span style={{textDecoration:'line-through',textTransform:'uppercase'}}>W</span></a>
        </div>
    </div>
</div>
<footer className="footer">
            <p>With &hearts; from Mekii</p>
    </footer>
    </div>
    
  );
}

export default Price;