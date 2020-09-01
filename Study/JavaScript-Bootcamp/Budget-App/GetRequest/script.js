console.log("Connected");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(json => console.log(json))


// const Http = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/todos/1";
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = e => {
//   const data = JSON.stringify(Http.responseText);
//   document.getElementById("data").innerHTML = data;
// };;

fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  function(response){
     return response.json();
    }
).then(function(jsonData){
    const data = JSON.stringify(jsonData);
    document.getElementById("data").innerHTML = data;
});

