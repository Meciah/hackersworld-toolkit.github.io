'use strict';


document.body.style.backgroundImage = "url('matrix.gif')";

function setFavicons(favImg){
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('favicon.png');
/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  try{
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }catch(e){
      
  }
  
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const update = function(newActive) {
  var isItem = newActive.closest('.carousel__item');
  const newActivePos = isItem.dataset.pos;
  var arr = []
  const current = document.querySelector("[data-pos='0']");
  const prev = document.querySelector("[data-pos='-1']");
  const next = document.querySelector("[data-pos='1']");
  // const first = document.querySelector("[data-pos='-2']");
  // const last = document.querySelector("[data-pos='2']");

  arr.push(current)
  arr.push(prev)
  arr.push(next)
  // arr.push(first)
  // arr.push(last)
  console.log(arr)
  //current.classList.remove('carousel__item_active');
  
  arr.forEach(item => {
    var itemPos = item.dataset.pos;
    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = (current - active);
  if (Math.abs(current - active) > 1) {
    return -current
  }

  return diff;
}

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

const refreshButton = document.getElementById('reset_btn');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

// Get the input field
var input = document.getElementById("wax_name");
var btn = document.getElementById('submit_btn')
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit_btn").click();
    console.log('success',input.value)
    getTableRows(input.value)
    getTableRowsUser(input.value)
    input.disabled = true;
    btn.disabled = true;
  }
});

document.getElementById('submit_btn').addEventListener('click', function() {
  console.log('success',input.value)
  makeList(getTableRows(input.value))
  getTableRowsUser(input.value)
  input.disabled = true;
  btn.disabled = true;
});

let hwb_price = ''
let hwb_val = ''
let hwb = sendHWB().then((responseJSON) => {
    // do stuff with responseJSON here...
    hwb_val = responseJSON
  });

async function makeList(listData) {
  // Establish the array which acts as a data source for the list
  let result_val= ''
      //fetch("https://wax.eosphere.io/v1/chain/get_table_rows?code=hackersworld&table=stakedtools&scope=4r1fy.wam")
    let result = await listData.then((responseJSON) => {
      // do stuff with responseJSON here...
      result_val = responseJSON
    });;
    //console.log(result_val)
    let myArray = Object.entries(result_val);
    
    //console.log((myArray));
  let table_titles = ['Asset ID', 'Template ID', 'Rarity', 'Slot Bonus','Earnings / HR', 'Earnings / Day']
  let listArray = []
  let templateArray = []
  let rarityArray = []
  let hourly_profit = []
  let daily_profit = []
  let slot_array = []
  let slot_bonus = 0
  let access_pass = false
  let total_HWB_per_hour = 0
  let total_HWB_per_day = 0
  let firewall_rarity = ''
  let antivirus_rarity = ''
  let cracker_rarity = ''
  //console.log(Object.keys(listData).length)
  //console.log(myArray.length)
  for (let i = 0;i<myArray.length;i++){
    if(myArray[i][1].schema_name === 'pass'){
      access_pass = true;
    }
    if(myArray[i][1].schema_name === 'firewall'){
      firewall_rarity = myArray[i][1].template_id;
    }
    if(myArray[i][1].schema_name === 'antivirus'){
      antivirus_rarity = myArray[i][1].template_id;
    }
    if(myArray[i][1].schema_name === 'cracker'){
      cracker_rarity = myArray[i][1].template_id;
    }
  }
  for (let i = 0;i<myArray.length;i++){
    if(myArray[i][1].schema_name !== 'virus'){
      continue;
    }
    else{
      console.log(myArray[i][1])
      listArray.push(myArray[i][1].asset_id)
      templateArray.push(myArray[i][1].template_id)
      if(myArray[i][1].template_id == '583358'){
        rarityArray.push('Common')
        hourly_profit.push(0.3)
        daily_profit.push(7.2)
      }else if(myArray[i][1].template_id == '583359'){
        rarityArray.push('Uncommon')
        hourly_profit.push(1)
        daily_profit.push(24)
      }else if(myArray[i][1].template_id == '583360'){
        rarityArray.push('Rare')
        hourly_profit.push(3)
        daily_profit.push(72)
      }
      else if(myArray[i][1].template_id == '583361'){
        rarityArray.push('Epic')
        hourly_profit.push(9)
        daily_profit.push(216)
      }
      else if(myArray[i][1].template_id == '583362'){
        rarityArray.push('Legendary')
        hourly_profit.push(27)
        daily_profit.push(648)
      }
    }

  }
  console.log(access_pass)
  if (firewall_rarity == 583353){
    firewall_rarity = 'Common'
  }
  if (firewall_rarity == 583354){
    firewall_rarity = 'Uncommon'
  }
  if (firewall_rarity == 583355){
    firewall_rarity = 'Rare'
  }
  if (firewall_rarity == 583356){
    firewall_rarity = 'Epic'
  }
  if (firewall_rarity == 583357){
    firewall_rarity = 'Legendary'
  }

  if (antivirus_rarity == 583343){
    antivirus_rarity = 'Common'
  }
  if (antivirus_rarity == 583344){
    antivirus_rarity = 'Uncommon'
  }
  if (antivirus_rarity == 583345){
    antivirus_rarity = 'Rare'
  }
  if (antivirus_rarity == 583346){
    antivirus_rarity = 'Epic'
  }
  if (antivirus_rarity == 583347){
    antivirus_rarity = 'Legendary'
  }

  if (cracker_rarity == 583348){
    cracker_rarity = 'Common'
  }
  if (cracker_rarity == 583349){
    cracker_rarity = 'Uncommon'
  }
  if (cracker_rarity == 583350){
    cracker_rarity = 'Rare'
  }
  if (cracker_rarity == 583351){
    cracker_rarity = 'Epic'
  }
  if (cracker_rarity == 583352){
    cracker_rarity = 'Legendary'
  }


  if (access_pass == true){
    if(listArray.length == 5){
      slot_bonus = 0
    }
    if(listArray.length == 6){
      slot_bonus = 1
    }
    if(listArray.length == 7){
      slot_bonus = 2.5
    }
    if(listArray.length == 8){
      slot_bonus = 4.5
    }
    if(listArray.length == 9){
      slot_bonus = 7
    }
    if(listArray.length == 10){
      slot_bonus = 10
    }
    if(listArray.length == 11){
      slot_bonus = 13.5
    }
    if(listArray.length == 12){
      slot_bonus = 17.5
    }
    if(listArray.length == 13){
      slot_bonus = 22
    }
  }else if(access_pass == false){
    if(listArray.length == 3){
      slot_bonus = 0
    }
    if(listArray.length == 4){
      slot_bonus = 1
    }
    if(listArray.length == 5){
      slot_bonus = 2.5
    }
    if(listArray.length == 6){
      slot_bonus = 4.5
    }
    if(listArray.length == 7){
      slot_bonus = 7
    }
    if(listArray.length == 8){
      slot_bonus = 10
    }
    if(listArray.length == 9){
      slot_bonus = 13.5
    }
    if(listArray.length == 10){
      slot_bonus = 17.5
    }
    if(listArray.length == 12){
      slot_bonus = 22
    }
  }
  for(let i = 0;i< listArray.length;i++){
    slot_array.push(slot_bonus + '%')
  }
  console.log(listArray)
  function add(accumulator, a) {
    return accumulator + a;
  }
  total_HWB_per_hour= hourly_profit.reduce(add, 0);
  total_HWB_per_day = daily_profit.reduce(add, 0);

  let title = document.createElement('tr');

  document.getElementById('listContainerHead').appendChild(title);
  
  table_titles.forEach(item => {
    console.log(item)
      let li = document.createElement('th');
      title.appendChild(li);
      
      li.innerHTML += item;
  });



  let ul = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ul);
  
  listArray.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ul.appendChild(li);
      
      li.innerHTML += item;
  });

  let ull = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ull);
  templateArray.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ull.appendChild(li);
  
      li.innerHTML += item;
  });

  let ulll = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ulll);
  rarityArray.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ulll.appendChild(li);
  
      li.innerHTML += item;
  });
  let ullll = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ullll);
  slot_array.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ullll.appendChild(li);
  
      li.innerHTML += item;
  });

  let ulllll = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ulllll);
  hourly_profit.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ulllll.appendChild(li);
  
      li.innerHTML += item;
  });

  let ullllll = document.createElement('tr');

  document.getElementById('listContainer').appendChild(ullllll);
  daily_profit.forEach(item => {
    console.log(item)
      let li = document.createElement('td');
      ullllll.appendChild(li);
  
      li.innerHTML += item;
  });


  let pass_staked = document.createElement('div');
  document.getElementById('listContainer').appendChild(pass_staked);
  pass_staked.innerHTML += ('Access Pass Staked : ' + (access_pass ? '&#10004': '&#x2717') )
  
  let firewall_staked = document.createElement('div');
  document.getElementById('listContainer').appendChild(firewall_staked);
  firewall_staked.innerHTML += ('Firewall : ' + firewall_rarity )

  let antivirus_staked = document.createElement('div');
  document.getElementById('listContainer').appendChild(antivirus_staked);
  antivirus_staked.innerHTML += ('Antivirus : ' + antivirus_rarity )

  let cracker_staked = document.createElement('div');
  document.getElementById('listContainer').appendChild(cracker_staked);
  cracker_staked.innerHTML += ('Cracker : ' + cracker_rarity )


  let total_HWB_hour = document.createElement('div');
  document.getElementById('listContainer').appendChild(total_HWB_hour);
  total_HWB_hour.innerHTML += ('HWB Per Hour : ' + (total_HWB_per_hour + (total_HWB_per_hour * (slot_bonus / 100))) )
  let total_HWB_day = document.createElement('div');
  document.getElementById('listContainer').appendChild(total_HWB_day);
  total_HWB_day.innerHTML += ('HWB Per Day : ' + (total_HWB_per_day + (total_HWB_per_day * (slot_bonus / 100))))

  let total_WAX_hour = document.createElement('div');
  document.getElementById('listContainer').appendChild(total_WAX_hour);
  total_WAX_hour.innerHTML += ('WAX Per Hour : ' + Math.round(((total_HWB_per_hour + (total_HWB_per_hour * (slot_bonus / 100))) * hwb_val),2) )
  let total_WAX_day = document.createElement('div');
  document.getElementById('listContainer').appendChild(total_WAX_day);
  total_WAX_day.innerHTML += ('WAX Per Day : ' + Math.round(((total_HWB_per_day + (total_HWB_per_day * (slot_bonus / 100))) * hwb_val),2))

  let message = document.createElement('p');
  document.getElementById('listContainerDiv').appendChild(message);
  message.innerHTML += '* Total Earnings Assumes the Base Multiplier of All Viruses is 100%, and there are no viruses installed on your system.'
}


async function getTableRows(id){
  let result;

  try {
    result = await fetch('https://wax.blokcrafters.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'json': true,  
        'code': 'hackersworld',
        'table': 'stakedtools',
        'scope': id,
        "limit": "100",
        "index_position": "",
        "key_type": "",
        "encode_type": "",
        "upper_bound": "",
        "lower_bound": ""
    }),})
      //fetch("https://wax.eosphere.io/v1/chain/get_table_rows?code=hackersworld&table=stakedtools&scope=4r1fy.wam")
    result = await result.json();
    console.log(result.rows);
  } catch(e) {
    console.log("stakedtools:")
    console.log(result);
  }
  return result.rows;
}

async function getTableRowsUser(id){
  let result;

  try {
    result = await fetch('https://wax.blokcrafters.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'json': true,  
        'code': 'hackersworld',
        'table': 'users',
        'scope': 'hackersworld',
        "limit": "2",
        "index_position": "",
        "key_type": "",
        "encode_type": "",
        "upper_bound": '',
        "lower_bound": id
    }),})
      //fetch("https://wax.eosphere.io/v1/chain/get_table_rows?code=hackersworld&table=stakedtools&scope=4r1fy.wam")
    result = await result.json();
    console.log(result.rows[0]);
  } catch(e) {

  }
  return result.rows[0];
}



async function getHWB() {
  try{
    let all_tokens = await fetch("https://wax.alcor.exchange/api/markets/636");
    all_tokens = await all_tokens.json();
    hwb_price = all_tokens
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


