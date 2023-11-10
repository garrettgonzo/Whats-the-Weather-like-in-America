// console.log('hi')
// const searchButton = document.querySelector("#searchBtn");
// console.log(searchButton)
// const handleSearch = () => {
//   console.log("searching")
// }
// searchButton.addEventListener("click", handleSearch)

const searchBtn = document.querySelector("#searchBtn")
const handleSearch = () => {
    var textInput = document.querySelector("#textInput")
    const inputSearchValue = textInput.value
    console.log(inputSearchValue);
    
    var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
    const city = inputSearchValue
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "git &units=imperial&appid=" + APIKey;
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
            <h1>Country: ${response.sys.country} </h1>
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

}
searchBtn.addEventListener("click", handleSearch);
