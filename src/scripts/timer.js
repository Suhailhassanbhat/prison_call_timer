import * as d3 from 'd3';
var tickerData = [{"State":"Kentucky","County":"Barren County","Provider":"Securus","first_minute":1.92,"additional_minute":0.07,"15_minute_call":2.9,"formattedCounty":"Barren-County"},{"State":"Kentucky","County":"Boyd County","Provider":"TelMate/GTL","first_minute":0.21,"additional_minute":0.21,"15_minute_call":3.15,"formattedCounty":"Boyd-County"},{"State":"Kentucky","County":"Boyle County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Boyle-County"},{"State":"Kentucky","County":"Caldwell County","Provider":"Securus","first_minute":2.7,"additional_minute":0.01,"15_minute_call":2.84,"formattedCounty":"Caldwell-County"},{"State":"Kentucky","County":"Carter County","Provider":"Securus","first_minute":0.75,"additional_minute":0.34,"15_minute_call":5.51,"formattedCounty":"Carter-County"},{"State":"Kentucky","County":"Clay County","Provider":"Securus","first_minute":0.33,"additional_minute":0.33,"15_minute_call":4.95,"formattedCounty":"Clay-County"},{"State":"Kentucky","County":"Clinton County","Provider":"Securus","first_minute":3.2,"additional_minute":0.2,"15_minute_call":6,"formattedCounty":"Clinton-County"},{"State":"Kentucky","County":"Crittenden County","Provider":"Securus","first_minute":2.84,"additional_minute":0.09,"15_minute_call":4.1,"formattedCounty":"Crittenden-County"},{"State":"Kentucky","County":"Floyd County","Provider":"Securus","first_minute":2.87,"additional_minute":0.12,"15_minute_call":4.55,"formattedCounty":"Floyd-County"},{"State":"Kentucky","County":"Graves County","Provider":"Securus","first_minute":0.3,"additional_minute":0.3,"15_minute_call":4.5,"formattedCounty":"Graves-County"},{"State":"Kentucky","County":"Hardin County","Provider":"Securus","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Hardin-County"},{"State":"Kentucky","County":"Harlan County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Harlan-County"},{"State":"Kentucky","County":"Hart County","Provider":"Securus","first_minute":0.22,"additional_minute":0.22,"15_minute_call":3.3,"formattedCounty":"Hart-County"},{"State":"Kentucky","County":"Henderson County","Provider":"Securus","first_minute":0.2,"additional_minute":0.2,"15_minute_call":3,"formattedCounty":"Henderson-County"},{"State":"Kentucky","County":"Jefferson County","Provider":"Securus","first_minute":1.8,"additional_minute":0.01,"15_minute_call":1.94,"formattedCounty":"Jefferson-County"},{"State":"Kentucky","County":"Jessamine County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Jessamine-County"},{"State":"Kentucky","County":"Laurel County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Laurel-County"},{"State":"Kentucky","County":"Leslie County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Leslie-County"},{"State":"Kentucky","County":"Letcher County","Provider":"Securus","first_minute":0.45,"additional_minute":0.45,"15_minute_call":6.75,"formattedCounty":"Letcher-County"},{"State":"Kentucky","County":"Lewis County","Provider":"Securus","first_minute":0.2,"additional_minute":0.2,"15_minute_call":3,"formattedCounty":"Lewis-County"},{"State":"Kentucky","County":"Madison County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Madison-County"},{"State":"Kentucky","County":"Marion County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Marion-County"},{"State":"Kentucky","County":"Pulaski County","Provider":"TelMate/GTL","first_minute":0.25,"additional_minute":0.25,"15_minute_call":3.75,"formattedCounty":"Pulaski-County"},{"State":"Kentucky","County":"Scott County","Provider":"Securus","first_minute":0.32,"additional_minute":0.32,"15_minute_call":4.8,"formattedCounty":"Scott-County"},{"State":"Kentucky","County":"Warren County","Provider":"Securus","first_minute":0.29,"additional_minute":0.29,"15_minute_call":4.35,"formattedCounty":"Warren-County"}]
// var tickerData = [{"formattedCounty":"2835","prison_name":"Bell Forestry Camp","facility_location":"Pineville","per_minute_rate":0.21},
// {"formattedCounty":"2836","prison_name":"Blackburn Corr. Complex","facility_location":"Lexington","per_minute_rate":0.21},
// {"formattedCounty":"2837","prison_name":"Eastern Ky. Corr. Complex","facility_location":"West Liberty","per_minute_rate":0.21},
// {"formattedCounty":"2838","prison_name":"Green River Corr. Complex","facility_location":"Central City","per_minute_rate":0.21},
// {"formattedCounty":"2839","prison_name":"Ky. Corr. Institution For Women","facility_location":"Pewee Valley","per_minute_rate":0.21},
// {"formattedCounty":"2840","prison_name":"Ky. State Penitentiary","facility_location":"Eddyville","per_minute_rate":0.21},
// {"formattedCounty":"2841","prison_name":"Ky. State Reformatory","facility_location":"Lagrange","per_minute_rate":0.21},
// {"formattedCounty":"2842","prison_name":"Lee Adjustment Center","facility_location":"Beatyville","per_minute_rate":0.21},
// {"formattedCounty":"2843","prison_name":"Little Sandy Corr. Complex","facility_location":"Sandy Hook","per_minute_rate":0.21},
// {"formattedCounty":"2844","prison_name":"Luther Luckett Corr. Complex","facility_location":"Lagrange","per_minute_rate":0.21},
// {"formattedCounty":"2845","prison_name":"Northpoint Training Center","facility_location":"Danville","per_minute_rate":0.21},
// {"formattedCounty":"2846","prison_name":"Psychiatric Center","facility_location":"Lagrange","per_minute_rate":0.21},
// {"formattedCounty":"2847","prison_name":"Roederer Corr. Complex","facility_location":"Lagrange","per_minute_rate":0.21},
// {"formattedCounty":"2848","prison_name":"Ross Cash Center","facility_location":"Fredonia","per_minute_rate":0.21},
// {"formattedCounty":"2849","prison_name":"Southeast State Corr. Complex","facility_location":"Wheelwright","per_minute_rate":0.21},
// {"formattedCounty":"2850","prison_name":"Western Ky. Corr. Facility","facility_location":"Fredonia","per_minute_rate":0.21}]
// mapping here works better than filtering as we can grab the exact data we need
const mapped = new Map(tickerData.map(d => [d.formattedCounty, d]))
console.log(mapped)
const str_pad_left = (string,pad,length) => (new Array(length+1).join(pad)+string).slice(-length)

const updateCost = (seconds) => costEl.innerText = seconds <= 60
    ? parseFloat(selectedJail.first_minute).toFixed(2)
    : parseFloat(+selectedJail.first_minute + +(((secondCounter - 60) * +selectedJail.additional_minute) / 60)).toFixed(2)

const updateJail = (seconds) => {
  // update values
  jail = jailSelectEl.node().value
  selectedJail = mapped.get(jail)
  providerEl.innerText = selectedJail.Provider
}

let time = 0
let minutes = Math.floor(time / 60);
let seconds = time - minutes * 60;
let finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
let finalCost = '0.00'
      
var timeEl = document.querySelector('#time')
var costEl = document.querySelector('#cost')
var jailSelectEl = d3.select('#jail-select')
var providerEl = document.querySelector("#provider")

let jail, selectedJail,secondCounter

// an initial update to the jail
updateJail(secondCounter)

// listener for changes on selection
jailSelectEl.on('change', function (d) {
  updateJail(secondCounter)
})

setInterval( () => {
  // do the math
  ++time;
  minutes = Math.floor(time / 60);
  seconds = time - minutes * 60;
  secondCounter = (minutes * 60) + seconds
  finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
  
  // change the element text
  timeEl.innerText = finalTime

  // only update on load
  // if (!jail) updateJail(secondCounter)
  updateCost(secondCounter)
}, 1000)
