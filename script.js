const h = document.querySelector('.hour-hand');
const m = document.querySelector('.minute-hand');
const s = document.querySelector('.second-hand');


function show_clk() {

    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    // alert(hours);
    let hrotation = ((hours + minutes / 60) / 12) * 360;
    let mrotation = 6 * minutes;
    let srotation = 6 * seconds;

    s.style.transform = `rotate(${srotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;
    h.style.transform = `rotate(${hrotation}deg)`;

    if (hours>22 || hours < 10) {
        document.querySelector(".clock").style.backgroundImage = "url('./images/clock-night.png ')";
        document.querySelector(".clock").style.opacity = "0.8";
        const gradientColor1 = 'rgb(54, 25, 49)';
        const gradientColor2 = 'rgb(2, 2, 52)';
        const gradient = `radial-gradient(${gradientColor1}, ${gradientColor2})`;
        document.querySelector("body").style.background = gradient;
        h.style.backgroundColor = 'white';
    }


}

setInterval(show_clk, 1000);


