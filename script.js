document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Función para dibujar un triángulo
    function drawTriangle(x, y, size) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + size / 2, y - (size * Math.sqrt(3)) / 2);
        context.lineTo(x + size, y);
        context.closePath();
        context.stroke();
    }

    // Función para limpiar el canvas
    function clearCanvas() {
        context.clearRect(0, 0, width, height);
    }

    // Función recursiva para dibujar el triángulo de Sierpinski
    function drawSierpinski(x, y, size, depth) {
        if (depth === 0) {
            drawTriangle(x, y, size);
        } else {
            const newSize = size / 2;

            // Dibujar triángulos recursivamente
            drawSierpinski(x, y, newSize, depth - 1);
            drawSierpinski(x + newSize / 2, y - (newSize * Math.sqrt(3)) / 2, newSize, depth - 1);
            drawSierpinski(x + newSize, y, newSize, depth - 1);
        }
    }

    // Dibujar el triángulo de Sierpinski gradualmente con animación
    function drawSierpinskiAnimated(depth) {
        let currentDepth = 0;
        const interval = setInterval(function() {
            clearCanvas();
            drawSierpinski(0, height, width, currentDepth);
            currentDepth++;
            if (currentDepth > depth) {
                clearInterval(interval);
            }
        }, 500); // Intervalo de tiempo en milisegundos
    }

    // Llamar a la función de animación con una profundidad de 6
    drawSierpinskiAnimated(6);
});
