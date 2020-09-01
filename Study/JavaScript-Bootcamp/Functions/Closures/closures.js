console.log("Successfully connected to Closure scripts");

function retirement(retirementAge) {
    var a = ' years to retirment';

    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// Note above that we have access to the a variabale even though it is outside the inner function
// inner function always has access to the variables and parameters of the outter function

var retirementUS = retirement(68);
var retirementCanada = retirement(65);
var retirementIreland = retirement(67);

retirementUS(1977);
retirementCanada(1977);
retirementIreland(1977);

retirement(68)(1977);


//////////////////////////////////////////////////////////////////////////////////

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you explain what UX design is?')
        } else if (job === 'teacher') {
            console.log(name + ', what ages do you teach?')
        } else {
            console.log(name + ', what do you do?')
        }
    }
}

interviewQuestion('teacher')('Chris');
interviewQuestion('designer')('Claire');
interviewQuestion('musician')('Erin');

//////////////////////////////////////////////////////////////////////////////////