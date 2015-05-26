function* mixedGenerator(args) {
    yield* [{}, 2];
    yield* "42";
    yield* args;
    yield* "Wow!";
}

var iterator = mixedGenerator([5, 6]);
var next = iterator.next();

while (!next.done) {
    console.log(next);
    next = iterator.next();
}