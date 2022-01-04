let clockEl = document.querySelector('.clock');
let hour    = document.querySelector('.h');
let minute  = document.querySelector('.m');
let secs    = document.querySelector('.s');
let short   = document.querySelector('.short'); 
let dateEl = document.querySelector('.date');

const monthEl = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May', 'June' , 'July' , 'Aug' , 'Sep' ,  'Oct' , 'Nov' , ' Dec'];
const dayEl = ['Sun','Mon',"Tue",'Wed','Thu','Fri','Sat'];

setInterval(function timeNow(){
let timeEl = new Date();


let yearEl = timeEl.getFullYear();
let month = timeEl.getMonth();
let datee = timeEl.getDate();
let day = timeEl.getDay();

let newEl =  datee + " " + dayEl[day] + ' ' + monthEl[month] + " "  + yearEl;

dateEl.textContent = newEl;
console.log(newEl);


let hourEl = timeEl.getHours();
let minuteEl = timeEl.getMinutes();
let secsEl = timeEl.getSeconds();

console.log(hourEl,minuteEl,secsEl)
hour.textContent = hourEl;
minute.textContent = minuteEl;
secs.textContent = secsEl;

if((secsEl <10) || (secsEl === 0)){
    secs.textContent = '0' + secsEl;
}

if((minuteEl <10) || (minuteEl === 0)){
    minute.textContent = '0' + minuteEl;
}


if(hourEl == 12){
    hour.textContent = hourEl;
    short.textContent = 'PM';
}

if(hourEl>12){
    short.textContent = 'PM';
    let neHour = hourEl % 12;
    hour.textContent = neHour;
    if(neHour<10 || neHour === 0){
        hour.textContent = '0' + neHour;
    }
}

if((hourEl < 12) || (hourEl === 0)){
    short.textContent = 'AM';
  hour.textContent = hourEl;
}

if((hourEl <10) || (hourEl === 0)){
     hour.textContent = '0' + hourEl;
     }



},1000);