import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/style.css';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Info from './info.js';
import Main from './main.js';

function App({ query }) {


  

  var initial_market_data = []
  function insertDecimal(num) {
    return (num / 100000000).toFixed(0);
 }

    const [waxPrice,setwaxPrice] = useState('')
    const [hwbPrice,sethwbPrice] = useState('')
    var wax_price = ''
    let wax_val = ''
    var hwb_price = ''


    useEffect (() =>{
      

  }, [])

  //     async function getWax() {
  //       try {
  //           const host = process.env.REACT_APP_HOST || "http://localhost:5000"
  //           const response = await fetch(
  //               `${host}/api/wax_price?q=${encodeURIComponent(query)}`
  //           )
  //           if (response.status === 200) {
  //               //setResponse("a Success!!!")
  //               const data = await response.json();
  //               setwaxPrice(data.info.wax.usd)
  //           }
  //       } catch (err) {

  //       }
  //   }

  //   async function getHWB() {
  //     try {
  //         const host = process.env.REACT_APP_HOST || "http://localhost:5000"
  //         const response = await fetch(
  //             `${host}/api/hwb_price?q=${encodeURIComponent(query)}`
  //         )
  //         if (response.status === 200) {
  //             //setResponse("a Success!!!")
  //             const data = await response.json();
  //             sethwbPrice(Math.round(data.info* 100) / 100)
  //         }
  //     } catch (err) {

  //     }
  // }


  // async function getStakedTools() {
  //   try {
  //       const host = process.env.REACT_APP_HOST || "http://localhost:5000"
  //       const response = await fetch(
  //           `${host}/api/staked?q=${encodeURIComponent(query)}`
  //       )
  //       if (response.status === 200) {
  //           //setResponse("a Success!!!")
  //           const data = await response.json();
  //           console.log(data.info.rows)
  //       }
  //   } catch (err) {
  
  //   }
  // }
        //getStakedTools()
      

  console.log(waxPrice)


  return (
    
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/info" element={<Info/>} />
        {/* <Route path="/menu2/:id" component={Menu2} />
        <Route path="/menu3/:id1/:id2" component={Menu3} /> */}
      </Routes>

    </div>
    
  );
}
// let Infographics = () => {
//   return (
//     <div className='info'>
//       <header className="header" data-header>

// <div className="container">

//   <a href="/" className="logo">
//     <img src="./favicon.png" width="32" height="32" alt="Cryptex logo"></img>

//   </a>

//   <nav className="navbar" data-navbar>
//     <ul className="navbar-list">

//       <li className="navbar-item">
//         <a href="https://play.hackersworld.io/account" target="_blank" className="navbar-link" data-nav-link>Play</a>
//       </li>

//       <li className="navbar-item">
//         <a href="https://hackersworld.io/" target="_blank" className="navbar-link" data-nav-link>Main Site</a>
//       </li>

//       <li className="navbar-item">
//         <a href="https://whitepaper.hackersworld.io/welcome-to-hackersworld/how-to-play" target="_blank" className="navbar-link" data-nav-link>Whitepaper</a>
//       </li>

//       <li className="navbar-item">
//         <a target="_blank" className="navbar-link" data-nav-link><Link to="/info">Infographics</Link></a>
//       </li>

//       <li className="navbar-item">
//         <a href="https://wax.alcor.exchange/trade/hwb-hackerstoken_wax-eosio.token" target="_blank" className="navbar-link" data-nav-link>HWB/WAX: </a>
//       </li>

//       <li className="navbar-item">
//         <a href="https://www.coingecko.com/en/coins/wax" className="navbar-link" target="_blank" data-nav-link>WAX/USDT: </a>
//       </li>

      

//       {/* <li className="navbar-item">
//         <a href="# " className="navbar-link" data-nav-link>Buy Wax</a>
//       </li> */}


//     </ul>
//   </nav>

//   <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
//     <span className="line line-1"></span>
//     <span className="line line-2"></span>
//     <span className="line line-3"></span>
//   </button>

//   {/* <a href="# " className="btn btn-outline">Donations :) --> 4r1fy.wam</a> */}

// </div>
// </header>





// <main>
// <article>
// <div className='banner_container'>
//       <img src='hackers_banner.png'></img>
// </div>
// <div className="select_container">
//   <div className="demo-flex-spacer"></div>

//   <div className="webflow-style-input">
//     <input className="" id='wax_name' type="email" placeholder="Enter your Wax Wallet"></input>
//     <button id ='submit_btn' type="submit"><i className="fa fa-chevron-circle-right"></i></button>
//   </div>
//   <button className='reset_btn' id='reset_btn'>
//     RESET
//   </button>
    

// </div>
// <div className='list_container' >
//       <table>
//         <thead id='listContainerHead'>

//         </thead>
//         <tbody id='listContainer'>

//         </tbody>
      
//       </table>
//       <div id='listContainerDiv' className='listContainerDiv'> </div>
//       <table>
//         {/* <thead id='listContainerHead'>

//         </thead> */}
//         <tbody >
//         <tr>Top Donors:
//           <td style={{minWidth:'200px'}}>1 : nfkb4.wam - 50 Wax</td>
//         </tr>
//         </tbody>
      
//       </table>
// </div>
// </article>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
// </main>






// <footer className="footer">
//       <p>With &hearts; from Mekii</p>
// </footer>
//     </div>
//   );
// };
export default App;
