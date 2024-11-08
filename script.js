let count = 0;

document.getElementById('button-clicker')
        .addEventListener('click', () =>{
    count++;
    document.getElementById('counter').innerHTML = count;
    if(count >= 0) {
        document.getElementById('counter').style.backgroundColor = 'green';
        document.getElementById('counter').style.color = 'white';
    } else {
        document.getElementById('counter').style.backgroundColor = 'orange';
        document.getElementById('counter').style.color = 'blue';
    }
});

document.getElementById('button').addEventListener('click', () => {
    count--;
    document.getElementById('counter').innerHTML = count;
if(count < 0) {
    document.getElementById('counter').style.backgroundColor = 'orange';
    document.getElementById('counter').style.color = 'blue';
} else {
    document.getElementById('counter').style.backgroundColor = 'grey';
    document.getElementById('counter').style.color = 'white';
}
})

document.getElementById('reinitialiser').addEventListener('click', () => {
    count = 0;
    document.getElementById('counter').innerHTML = count;
    document.getElementById('counter').style.backgroundColor = 'green';
})