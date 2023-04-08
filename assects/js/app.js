// alert ("Hello JS");

var cl = console.log;

const digitalClock = document.getElementById("digitalClock");
const setZero = (num) =>{
   return num < 10 ? "0" + num : num
}

function createDigitalClock(){
    let d = new Date();
cl(d);

let hr = d.getHours();
let min = d.getMinutes();
let second = d.getSeconds();
let section = "AM";

if(hr >= 12){
    hr = hr - 12
    section = "PM"
}

// if(hr < 10){
//     hr = '0' + hr;
// }

// if(min < 10){
//     min = '0' + min;
// }

// if(second < 10){
//     second = '0' + second;
// }
let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(second)} : ${section}`;
cl(result)

digitalClock.innerHTML = result;

setTimeout(() =>{
    createDigitalClock();
}, 1000);

}

createDigitalClock();

