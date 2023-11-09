var cityButton = document.querySelector(".cityButton")
cityButton.addEventListener("click", function(){
    console.log("click");
});


console.log("dc7271cf24099ef606a3cfa6b3d2e65f");
var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
const city = "London"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL).then(response => {
    response.json().then(response => {
        console.log(response);
        const htmlString = `
            <main>
            <h1>Location: ${response.name} </h1> 
            <h1>Weather: ${response.weather[0].main} </h1>
            <h1>Temp: ${response.main.temp} °F</h1>
            <h1>Wind: ${response.wind.speed} MPH</h1>
                <h1>Humidity: ${response.main.humidity} %</h1>
                <p>Learn how to convert a string to HTML using JavaScript.</p>
            </main>
        `;
        
        const convertStringToHTML = htmlString => {
            const parser = new DOMParser();
            const html = parser.parseFromString(htmlString, 'text/html');
        
            return html.body;
        }
        const body = convertStringToHTML(htmlString);
        
        document.body.appendChild(body)
    })
})

// const myarry = [50,60,70,80]
//     const myObject = {
//         foo: 42,
//         bar: 17,
//         monke: 16,
//       };
// console.log(myarry[-1]);