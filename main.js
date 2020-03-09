// Click Counter

// Global Variable
let count = 0;

// Event Lisenters
document.getElementById('sub1').addEventListener('click', subOne);
document.getElementById('sub5').addEventListener('click', subFive);
document.getElementById('sub10').addEventListener('click', subTen);
document.getElementById('plus1').addEventListener('click', addOne);
document.getElementById('plus5').addEventListener('click', addFive);
document.getElementById('plus10').addEventListener('click', addTen);

// Event Functions
function subOne () {
    // Update Variable
    count = count - 1;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}

function subFive () {
    // Update Variable
    count = count - 5;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}

function subTen () {
    // Update Variable
    count = count - 10;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}
function addOne () {
    // Update Variable
    count = count + 1;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}

function addFive () {
    // Update Variable
    count = count + 5;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}

function addTen () {
    // Update Variable
    count = count + 10;

    // Display New Value
    document.getElementById('counter').innerHTML = count;
}