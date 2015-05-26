function* generatorFunction() {
    try {
        yield 'Meow!';
        yield 'Bau!';
    } catch (error) {
        console.log('Caught: ' + error);
    }
}

var iterator = generatorFunction();
console.log(iterator.next());

iterator.throw(new Error('Problem!'));
console.log(iterator.next());