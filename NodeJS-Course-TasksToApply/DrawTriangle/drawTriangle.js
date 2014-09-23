function init() {
    var canvas, ctx,
        colorFillSelector,
        colorStrokeSelector,
        strokeLineWidthSelector,
        defaultColor,
        fillColor, strokeColor,
        strokeLineWidth,
        pointsCounter,
        clearBtn;

    // Get colors
    defaultColor  = '#000000';

    colorFillSelector = document.getElementById("fillColor");
    colorFillSelector.addEventListener('change', function () {
        fillColor = colorFillSelector.value;
    });
    fillColor = colorFillSelector.value || defaultColor;

    colorStrokeSelector = document.getElementById("strokeColor");
    colorStrokeSelector.addEventListener('change', function () {
        strokeColor = colorStrokeSelector.value;
    });
    strokeColor = colorStrokeSelector.value || defaultColor;

    // Get stroke line width
    strokeLineWidthSelector = document.getElementById("lineWidth");
    strokeLineWidthSelector.addEventListener('change', function () {
        strokeLineWidth = strokeLineWidthSelector.value;
    });
    strokeLineWidth = strokeLineWidthSelector.value || 0;

    canvas = document.getElementById("drawTriangle");
    ctx = canvas.getContext("2d");

    pointsCounter = 0;
    canvas.addEventListener('click', function (event) {
        var x, y;

        x = event.clientX - 20; // margins...
        y = event.clientY - 20;

        draw(x, y);
    });

    function draw(x, y) {
        pointsCounter++;
        if (pointsCounter === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else if (pointsCounter === 2) {
            ctx.lineTo(x, y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = strokeLineWidth;
            ctx.stroke();
        } else if (pointsCounter === 3) {
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = fillColor;
            ctx.fill();
            pointsCounter = 0;
        }
    }

    // Clear canvas
    clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function () {
        ctx.clearRect(0, 0, 600, 400);
    });
}

onload = init;