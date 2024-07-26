const dateElem = document.querySelectorAll('.date > span');
const time = document.querySelector('.time');
const timeElem = document.querySelectorAll('.time > span');

function setDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();

    dateElem[0].textContent = day < 10 ? '0' + day + ' ' : day + ' ';
    dateElem[1].textContent = months[month];
}

function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    time.innerHTML = `<span>${hours < 10 ? '0' + hours : hours}:</span><span>${minutes < 10 ? '0' + minutes : minutes}:</span><span>${seconds < 10 ? '0' + seconds : seconds}</span>`;
}

setInterval(setTime, 1000);
setDate();
setTime();
