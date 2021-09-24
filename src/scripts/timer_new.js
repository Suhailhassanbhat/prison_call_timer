import * as d3 from 'd3';
var pymChild = new pym.Child();
// mapping here works better than filtering as we can grab the exact data we need
// console.log(mapped)
window.addEventListener('load', (event) => {
 console.log('loading')

  const str_pad_left = (string,pad,length) => (new Array(length+1).join(pad)+string).slice(-length)

  let time = 0
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
  let finalCost = '0.00'
        
  var timeEl = document.querySelector('#time')
  var costEl = document.querySelector('#cost')
  var providerEl = document.querySelector("#provider")

  let minuteCounter

  setInterval( () => {
    // do the math
    ++time;
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    minuteCounter = minutes + 1
    finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    
    // change the element text
    timeEl.innerText = finalTime
    costEl.innerText = parseFloat(minuteCounter * 0.21).toFixed(2)
    providerEl.innerText = "Securus"
  }, 1000)

  const fastButton = d3.select("#fast-button")

  fastButton.on("click", function(d){

    setInterval( () => {
      // do the math
      ++time;
      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minuteCounter = minutes + 1
      finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
      
      // change the element text
      timeEl.innerText = finalTime
      costEl.innerText = parseFloat(minuteCounter * 0.21).toFixed(2)
      providerEl.innerText = "Securus"
    }, 100)
  })
  
}); 

if (pymChild) pymChild.sendHeight();
