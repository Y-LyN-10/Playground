function* generateRandoms() {
    while (true) {
        yield Math.random();
    }
}

var iterator = generateRandoms();
console.log(iterator);