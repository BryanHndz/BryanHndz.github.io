

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('time');

document.cookie="name=Bryan;expires= 29 Mar 2022 23:59:59 GMT"

const myinterval = setInterval(() => {
    const now = new Date();
    const culto = new Date('Mon Mar 28 2022 18:20:00 GMT-0600');
    const defer = Math.floor((culto - now)/1000);

    if (defer < 1) {
        clearInterval(myinterval);
        time.textContent = 'Ya comenzó!!!'
    } else{
        const secondsc = Math.floor(defer % 60);
        const minutesc = Math.floor((defer / 60) % 60); 
        const hoursc = Math.floor(defer / 3600 % 24);
        const daysc = Math.floor(defer / 86400);
    
        days.textContent = `${daysc}D`;
        hours.textContent = `${hoursc}H`;
        minutes.textContent = `${minutesc}M`;
        seconds.textContent = `${secondsc}S` ; 
        
        if (defer < 86400) {
            time.classList.add('oneday--indicator');
        }
    }

}, 1000);