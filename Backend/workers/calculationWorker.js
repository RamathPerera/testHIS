let x = 0
function performCalculation() {
    x++;
    console.log('x =', x);
}

setInterval(performCalculation, 1000);
