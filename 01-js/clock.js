/*
User
Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM) in js
*/

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var time24h = hours + ":" + minutes + ":" + seconds;
  
    var time12h = hours > 12 ? hours - 12 : hours;
    time12h = (time12h < 10 ? "0" : "") + time12h;
    time12h += ":" + minutes + ":" + seconds + " " + (hours >= 12 ? "PM" : "AM");
//   console.log(time12h);
  console.log(time24h);
  }
  
  // Call updateTime every second
  setInterval(updateTime, 1000);
  