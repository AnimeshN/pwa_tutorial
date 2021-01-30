let text = document.getElementById('counter-text')
let button = document.getElementById('counter-btn');
let counter = 0;
button.addEventListener('click',() =>{
    counter++;
    text.innerHTML = counter;
})

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(res => console.log('Registered',res))
}


