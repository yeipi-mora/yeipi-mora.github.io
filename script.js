// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Function to draw a filled triangle
function drawTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

// Function to recursively draw the Sierpinski Triangle
function drawSierpinski(x1, y1, x2, y2, x3, y3, depth) {
    if (depth === 0) {
        drawTriangle(x1, y1, x2, y2, x3, y3);
    } else {
        const mid1x = (x1 + x2) / 2;
        const mid1y = (y1 + y2) / 2;
        const mid2x = (x2 + x3) / 2;
        const mid2y = (y2 + y3) / 2;
        const mid3x = (x1 + x3) / 2;
        const mid3y = (y1 + y3) / 2;

        drawSierpinski(x1, y1, mid1x, mid1y, mid3x, mid3y, depth - 1);
        drawSierpinski(mid1x, mid1y, x2, y2, mid2x, mid2y, depth - 1);
        drawSierpinski(mid3x, mid3y, mid2x, mid2y, x3, y3, depth - 1);
    }
}

// Draw the Sierpinski Triangle
const initialDepth = 5; // Adjust the depth as needed
const side = 500; // Adjust the size of the triangle as needed
const height = Math.sqrt(3) * side / 2;
const x1 = 50;
const y1 = 550;
const x2 = x1 + side;
const y2 = y1;
const x3 = x1 + side / 2;
const y3 = y1 - height;

drawSierpinski(x1, y1, x2, y2, x3, y3, initialDepth);