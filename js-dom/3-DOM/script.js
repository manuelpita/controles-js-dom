'use strict'
//Añadir un <div> al body

const newDiv = document.createElement('div');
    newDiv.id = 'clock';
document.body.appendChild(newDiv);

function startClock() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    // Añadir 0 a los valores < 10
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    const clock = document.getElementById("clock").innerHTML = 
        (hour+":"+minute+":"+second)
    const onTime = setInterval(function(){startClock()}, 500);}

function checkTime(i) {
        if (i < 10) {
            i ="0" + i;
            }
        return i
        }

window.onload = startClock