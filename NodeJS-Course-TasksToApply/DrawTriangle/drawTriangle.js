function init() {
    var canvas, ctx,
        colorFillSelector,
        colorStrokeSelector,
        strokeLineWidthSelector,
        fillColor,
        strokeColor,
        strokeLineWidth,
        clearBtn;

    // Get fill color
    colorFillSelector = document.getElementById("fillColor");
    fillColor = colorFillSelector.value; // init value

    colorFillSelector.addEventListener('change', function () {
        fillColor = colorFillSelector.value;
    });

    // Get stroke color
    colorStrokeSelector = document.getElementById("strokeColor");
    strokeColor = colorStrokeSelector.value; // init value

    colorStrokeSelector.addEventListener('change', function () {
        strokeColor = colorStrokeSelector.value;
    });

    // Get stroke line width
    strokeLineWidthSelector = document.getElementById("lineWidth");
    strokeLineWidth = strokeLineWidthSelector.value; // init value

    strokeLineWidthSelector.addEventListener('change', function () {
        strokeLineWidth = strokeLineWidthSelector.value;
    });

    canvas = document.getElementById("drawTriangle");
    ctx = canvas.getContext("2d");

    var counter = 0;
    canvas.addEventListener('click', function (event) {
        var x, y;

        x = event.clientX - 20;
        y = event.clientY - 20;

        var init = true;
        draw(x, y);
    });

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeLineWidth;

    function draw(x, y) {
        if (counter == 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            counter++;
        } else if (counter < 2) {
            ctx.lineTo(x, y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = strokeLineWidth;
            ctx.stroke();
            counter++;
        } else if (counter === 2) {
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = fillColor;
            ctx.fill();
            counter = 0;
        }
        console.log(x + ' ' + y);
        console.log(counter);
    }

    // Clear canvas
    clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function () {
        ctx.clearRect(0, 0, 600, 400);
    });
}

onload = init;