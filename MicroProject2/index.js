let count=0;
document.getElementById('counter').innerText=count;

function increment() {
    ++count;
    document.getElementById('counter').innerText=count;
}
function decrement() {
    --count;
    if(count < 0)
    count=0;
    document.getElementById('counter').innerText=count;
}
function reset() {
    count=0;
    document.getElementById('counter').innerText=count;
}