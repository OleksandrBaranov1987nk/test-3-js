const box = document.querySelector('.js-box')
const titleTimer = document.querySelector('.js-timer')
let counter = 10;


setTimeout(() => {
    box.style.display = "block";
    const id = setInterval(() => {
        
        titleTimer.textContent = counter;
        counter -=1;
        if (!counter) {
            clearInterval(id);
            titleTimer.textContent = 'X';
            titleTimer.addEventListener("click", (() => {
                box.style.display = "none";
            }));
            
        }
    },1000)
}, 10000);

