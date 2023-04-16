const repeatString = function(name, number) {
    let answer = '';
    let index = 0;

    if (number >=0) {
        for (; index < number; index++) {
            answer = answer + name;
        }
        return answer;
    } else {
        return 'ERROR';
    }


};

// Do not edit below this line
module.exports = repeatString;