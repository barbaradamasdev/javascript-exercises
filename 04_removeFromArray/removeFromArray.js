const removeFromArray = function(array, number1, number2, number3, number4) {

    for (let i=0; i<=array.length; i++) {
        if (array[i] === number1) {
            array.splice(i, 1)
        }
    }
    for (let i=0; i<=array.length; i++) {
        if (array[i] === number2) {
            array.splice(i, 1)
        }
    }
    for (let i=0; i<=array.length; i++) {
        if (array[i] === number3) {
            array.splice(i, 1)
        }
    }
    for (let i=0; i<=array.length; i++) {
        if (array[i] === number4) {
            array.splice(i, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


// THE SOLUTION MORE SIMPLE
// use the 'filter' function, 
// which basically does what we did with the forEach above.

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//