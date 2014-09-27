function init() {
    'use strict';

    var
        clearBtn,
        fillColor,
        strokeColor,
        defaultColor,
        strokeLineWidth,
        colorFillSelector,
        colorStrokeSelector,
        strokeLineWidthSelector,
        pointsCounter, canvas, ctx;

    // Get colors
    defaultColor = '#000000';

    // Vanilla ice ice baby...
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

    var galleryBox = document.getElementById('gallery');
    loadGallery();

    pointsCounter = 0;
    canvas.addEventListener('click', function (event) {
        var x, y, margins = 20;

        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - margins;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop - margins;

        draw(x, y);
    });

    function draw(x, y) {
        pointsCounter += 1;
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

    var saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', function () {
        var fileName = prompt("Enter file name to save your art shedevr: ", "Untitled");
        if (fileName !== null) {
            localStorage.setItem(fileName, canvas.toDataURL());
            addToGallery(fileName);
        }
    });

    function loadGallery() {
        for (var key in localStorage){
            console.log(key);
            addToGallery(key);
        }
    }

    function addToGallery(key) {
        var imageBox = document.createElement('div');
        imageBox.setAttribute('class', 'imageBox');

        var header = document.createElement('span');
        header.innerHTML = key;

        var img = document.createElement('img');
        img.src = localStorage.getItem(key);

        var loadBtn = document.createElement('input');
        loadBtn.type = 'button';
        loadBtn.value = 'Load';
        loadBtn.setAttribute('class', 'textBtn');
        loadBtn.addEventListener('click', function () {
            ctx.clearRect(0, 0, 600, 400);
            var img=new Image();
            img.src=localStorage.getItem(key);
            ctx.drawImage(img,0,0);
        });

        var removeBtn = document.createElement('input');
        removeBtn.type = 'button';
        removeBtn.value = 'Remove';
        removeBtn.setAttribute('class', 'textBtn');
        removeBtn.addEventListener('click', function () {
            localStorage.removeItem(key);
            galleryBox.removeChild(imageBox);
        });

        imageBox.appendChild(header);
        imageBox.appendChild(img);
        imageBox.appendChild(loadBtn);
        imageBox.appendChild(removeBtn);
        galleryBox.appendChild(imageBox);
    }
}

onload = init;