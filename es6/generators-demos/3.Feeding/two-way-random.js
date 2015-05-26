function* generateRandoms(max) {
    max = max || 1;

    while (true) {
        var newMax = yield Math.random() * max;
        if (newMax !== undefined) {
            max = newMax;
        }
    }
}

var iterator = generateRandoms();
console.log(iterator.next());