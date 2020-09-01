console.log("Successfully connected to Binding scripts");

// John
var john = {
    name: 'John',
    age: 28,
    job: 'software developer',
    presentation: function(style, timeofDay){
        if(style==='formal'){
            console.log('Good ' + timeofDay + ' ladies and gentlemen, my name is ' + this.name + ' and I am a ' + this.age + ' year old ' + this.job)
        } else if(style==='casual'){
            console.log('Top of the ' + timeofDay + ' to ya, my name is ' + this.name + ' and I am a ' + this.age + ' year old ' + this.job)
        }
    }

}

// Emily
var emily ={
    name: 'Emily',
    age: 32,
    job: 'designer'
}

// call the presentation method for John
john.presentation('formal','morning');
john.presentation('casual','evening')

// Apply the presentation method stored in the john object to emily - "method borrowing" - call method
john.presentation.call(emily, 'formal', 'evening');
john.presentation.call(emily, 'casual', 'evening');
