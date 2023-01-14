
// Fetch API 

// async function fetch() {
//     let response = await fetch('https://restcountries.com/v3.1/all');
//     let data = await response.text;
//     console.log(data)
// }

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data));