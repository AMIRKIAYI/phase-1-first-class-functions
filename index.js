let x = 5;
let y = 6;

function addNumbers() {
    let sum = x + y;
    console.log(sum);
}

function receivesAFunction(receive) {
    console.log(x, y);
    receive();
}

function returnsANamedFunction() {
    return addNumbers; // Returns the named function 'addNumbers'
}

function returnsAnAnonymousFunction() { 
    return function() {
        console.log('An anonymous function');
    };
}

