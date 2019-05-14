console.log("Successfully connected to function scripts");

var years = [1970, 1975, 1980, 1985, 2005]

// main function
function arrayCalc(arr, fn) {
    arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// function 1
function calculateAge(el) {
    return 2019 - el;
}

// function 2
function adult(el) {
    if (el < 18) {
        return "Junior";
    } else {
        return "Adult";
    }
}

// display results
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var adult = arrayCalc(ages, adult);
console.log(adult);