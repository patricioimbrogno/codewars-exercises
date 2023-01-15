// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(fn) {
  let n = fn(0);
  return n;
}

function one() {
    let obj = {times: "*", plus: "+", minus: "-", dividedBy: "/"};
    let operation = fn.name
    
    let number = fn()

    if(fn) {
        for (const key in obj) {
            if(operation===key) {
                operation=obj.key
                let math_it_up = {
                    '+': function (x, y) { return x + y },
                    '-': function (x, y) { return x - y },
                    '*': function (x, y) { return x * y },
                    '/': function (x, y) { return x / y },
                }
                return math_it_up[operation](1, number)
            }
        }
    } else {
        return 1
    }
}

function plus(fn) {
    let number = fn.name

    let obj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    };

    for (const key in obj) {
        if(number===key) {
            number=obj.key
        }
    }
  return number
}

function two(fn) {}
function three(fn) {}
function four(fn) {}
function five(fn) {}
function six(fn) {}
function seven(fn) {}
function eight(fn) {}
function nine(fn) {}

function plus(fn) {}
function minus(fn) {}
function times(fn) {}
function dividedBy(fn) {}
