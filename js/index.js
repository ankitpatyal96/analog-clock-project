setInterval(() => {
    let d = new Date();
    let noOfHours = d.getHours();
    let noOfminutes = d.getMinutes();
    let noOfSeconds = d.getSeconds();
    let hourRotation = 30*noOfHours + noOfminutes/2;
    let minuteRotation = 6*noOfminutes;
    let secondRotation = 6*noOfSeconds;

    

    hour.style.transform = `rotate(${hourRotation}deg)`;

    //rotating minutes div
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    
    //rotating seconds div
    second.style.transform = `rotate(${secondRotation}deg)`;

}, 1000);