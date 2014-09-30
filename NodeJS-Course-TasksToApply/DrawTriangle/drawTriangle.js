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

    var imageBox = document.createElement('div');
    var imageHeader = document.createElement('span');
    var image = document.createElement('img');
    var loadButton = document.createElement('input');
    var removeButton = document.createElement('input');
    var galleryBox = document.getElementById('gallery');

    applyButtonAttributes(loadButton, 'Load');
    applyButtonAttributes(removeButton, 'Remove');

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
        var fileName = prompt('Enter file name to save your art shedevr: ', 'untitled');
        var confirmedName = false;
        // TODO: check if image already exists in Local Storage
        if (fileName !== null && fileName.length > 0) {
            if (localStorage.getItem(fileName) === null) {
                addToLocalStorage(fileName);
                addToGallery(fileName/*, localStorage.length + 1*/ );
            }
            if (localStorage.key(fileName) === fileName) {
                console.log(localStorage.key(fileName));
                console.log(fileName);
                confirmedName = confirm('Local storage already contains image with name "' + fileName + '". Replace the previous image?');
                if (confirmedName) {
                    removeFromLocalStorage(fileName);
                    removeFromGallery(fileName);

                    addToLocalStorage(fileName);
                    addToGallery(fileName);
                } else {
                    console.log('image is not saved');
                }
            }
        }
    });

    function addToLocalStorage(key) {
        localStorage.setItem(key, canvas.toDataURL());
    }

    // Remove from local storage and from gallery
    function removeImage(key, id) {
        localStorage.removeItem(key);
        var imageBoxToRemove = document.getElementById(id);
        galleryBox.removeChild(imageBoxToRemove);
    }

    function loadGallery() {
        var index = 0;
        for (var key in localStorage) {
            addToGallery(key, index);
            index += 1;
        }
    }

    function addToGallery(key, id) {
        var currentImageBox = imageBox.cloneNode(true);
        currentImageBox.classList.add('imageBox');
        currentImageBox.id = id;

        var currentHeader = imageHeader.cloneNode(true);
        currentHeader.innerHTML = key + '<br>';

        var img = image.cloneNode(true);
        img.src = localStorage.getItem(key);

        var loadBtn = loadButton.cloneNode(true);
        loadBtn.addEventListener('click', function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var img = new Image();
            img.src = localStorage.getItem(key);
            ctx.drawImage(img, 0, 0);
        });

        var removeBtn = removeButton.cloneNode(true);
        removeBtn.addEventListener('click', function () {
            removeImage(key, currentImageBox.id);
        });

        currentImageBox.appendChild(currentHeader);
        currentImageBox.appendChild(img);
        currentImageBox.appendChild(loadBtn);
        currentImageBox.appendChild(removeBtn);
        galleryBox.appendChild(currentImageBox);
    }

    function applyButtonAttributes(textButton, value) {
        textButton.type = 'button';
        textButton.classList.add('textBtn');
        textButton.value = value;
        return textButton;
    }
}

onload = init;

// TODO: Optimize - And work via parent element
// TODO: Optimize - createDocumentFragment() - append everything to it and return the whole fragment
// TODO: Refactoring - separate drawing logic and storage logic