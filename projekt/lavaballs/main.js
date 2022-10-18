let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.beginPath();
context.strokeStyle = 'rgb(255, 255, 255)'
context.rect(20, 20, 150, 100);
context.stroke();