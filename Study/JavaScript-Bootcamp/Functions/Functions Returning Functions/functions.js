console.log("Successfully connected to function returning functions scripts");

function interviewQuestion (job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is?')
        }
    } else if (job ==='teacher'){
        return function(name){
            console.log(name + ', what ages do you teach?')
        }
    } else{
        return function(name){
            console.log(name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Chris');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Claire');

var otherQuestion = interviewQuestion('other');
otherQuestion('Erin');
