console.log("working");

let defaultWidth = '30%';
let defaultHeight = '40px';
let defaultColor = '#0000FF';
let defaultBorderRadius = '0px';

function updateSquare() {
    let square = document.getElementById('square');

    // controls
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let color = document.getElementById('color').value;
    let borderRadius = document.getElementById('borderRadius').value;

    square.style.width = width + 'px';
    square.style.height = height + 'px';
    square.style.backgroundColor = color;
    square.style.borderRadius = borderRadius + 'px';
}

function updateToBack() {
    let square = document.getElementById('square');

    // controls
    document.getElementById('height').value = '';
    document.getElementById('width').value = '';
    document.getElementById('color').value = '#0000FF';
    document.getElementById('borderRadius').value = '';

    // square.classList.add('square');

    square.style.width = defaultWidth;
    square.style.height = defaultHeight;
    square.style.backgroundColor = defaultColor;
    square.style.borderRadius = defaultBorderRadius;

}


