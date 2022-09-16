const Heading = require('./scripts/heading');

document.addEventListener("DOMContentloaded", () => {
    const root = document.getElementById('root');
    const heading = new Heading("This is a light browser tennis game");
    root.innerHTML = heading.heading; 

})