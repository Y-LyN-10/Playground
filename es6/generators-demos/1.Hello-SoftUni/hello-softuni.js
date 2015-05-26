function* helloWorld() {
    yield 'Hello';
    yield 'SoftUni!';
}

var iterator = helloWorld();
var next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}