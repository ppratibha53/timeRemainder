//browser object model in lec-22///   BOM

const daysElement    = document.querySelector(".days");
const hoursElement   = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading        = document .querySelector("h1");
 const counterTimer  = document.querySelector(".counterTimer");

//counter time ,javascript////////


const second =1000;
const minute=60*second;
const hour=60*minute;
const day = 24*hour;


const timerFunction = ()=>{
// console.log(second);
// console.log(minute);
// console.log(hour);
// console.log(day);

//set alert to take inpute from user/////
let now = new Date();

//padStart(2,"0") is use for shoew the two digit number
let dd =  String( now.getDate()).padStart(2,"0");
let mm =  String( now.getMonth()+1).padStart(2,"0");
let yyyy =  now.getFullYear();



const enterDay  = prompt("Enter Day").padStart(2,"0");
const enterMonth  = prompt("Enter Month").padStart(2,"0");
now = `${mm}/${dd}/${yyyy}`;





//console.log(`${enterMonth}/${enterDay}/${yyyy}`);

let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;
 
if(now > targetDate)targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;









 const intervalId = setInterval(()=>{



    //const timer  = new Date ("06/29/2023").getTime();
    const timer  = new Date (targetDate).getTime();
    const today = new Date().getTime();
    




    const difference = timer - today;
    // console.log(timer);
    // console.log(today);
    // console.log(difference);
    // console.log(Math.floor(difference / day));
    // console.log((difference % day)/ hour);


    const leftDay = Math.floor(difference/day);
    const leftHour = Math.floor((difference%day)/hour);
    const leftMinute = Math.floor((difference%hour)/minute);
    const leftSecond = Math.floor((difference%minute)/second);



daysElement.innerText = leftDay;
hoursElement.innerText = leftHour;
minutesElement.innerText = leftMinute;
secondsElement.innerText = leftSecond;

if(difference<0){
counterTimer.style.display = "none"; 
heading.innerText = "Time's up"
clearInterval(intervalId);  

}


//console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
},0);


};
timerFunction();

