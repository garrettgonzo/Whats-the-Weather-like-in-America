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
    // console.log(inputSearchValue);
    
    var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
    const city = inputSearchValue
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL).then(response => {
        response.json().then(response => {
            // console.log(response);
            const htmlString = `
            <main>
            <h1>Location: ${response.name} </h1> 
            <h1>Weather: ${response.weather[0].icon} </h1>
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

var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
const city = "brea"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?&q=" + city + "&units=imperial&appid=" + APIKey
fetch(queryURL).then(response => {
    response.json().then(response => {
        console.log(response);
        const htmlString = `
        <main>
        <h1>Location: ${response.city.name} </h1> 
        <h1>Date: ${response.list[4].dt_txt} </h1> 
        <h1>Weather: ${response.list[4].weather[0].icon} </h1> 
        <h1>Temp: ${response.list[4].main.temp} °F</h1> 
        <h1>Wind: ${response.list[4].wind.speed} MPH</h1> 
        <h1>Humidity: ${response.list[4].main.humidity} %</h1> 

        <h2>Location: ${response.city.name} </h2> 
        <h2>Date: ${response.list[12].dt_txt} </h2> 
        <h2>Weather: ${response.list[12].weather[0].icon} </h2> 
        <h2>Temp: ${response.list[12].main.temp} °F</h2> 
        <h2>Wind: ${response.list[12].wind.speed} MPH</h2> 
        <h2>Humidity: ${response.list[12].main.humidity} %</h2>
        
        <h3>Location: ${response.city.name} </h3> 
        <h3>Date: ${response.list[20].dt_txt} </h3> 
        <h3>Weather: ${response.list[20].weather[0].icon} </h3> 
        <h3>Temp: ${response.list[20].main.temp} °F</h3> 
        <h3>Wind: ${response.list[20].wind.speed} MPH</h3> 
        <h3>Humidity: ${response.list[20].main.humidity} %</h3>
        
        <h4>Location: ${response.city.name} </h4> 
        <h4>Date: ${response.list[28].dt_txt} </h4> 
        <h4>Weather: ${response.list[28].weather[0].icon} </h4> 
        <h4>Temp: ${response.list[28].main.temp} °F</h4> 
        <h4>Wind: ${response.list[28].wind.speed} MPH</h4> 
        <h4>Humidity: ${response.list[28].main.humidity} %</h4>
        
        <h5>Location: ${response.city.name} </h5> 
        <h5>Date: ${response.list[36].dt_txt} </h5> 
        <h5>Weather: ${response.list[36].weather[0].icon} </h5> 
        <h5>Temp: ${response.list[36].main.temp} °F</h5> 
        <h5>Wind: ${response.list[36].wind.speed} MPH</h5> 
        <h5>Humidity: ${response.list[36].main.humidity} %</h5> 
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
