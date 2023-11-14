const resultsElement = document.getElementById('results');
// Set the HTML content of the 'results' element
// const responseHTML = `
//             <main>
//             <h6>Location:  </h6> 
//             <h6>Weather: <img src="https://openweathermap.org/img/w/10d.png" alt="Girl in a jacket">   </h6>
//             <h6>Temp:  °F</h6>
//             <h6>Wind:  MPH</h6>
//             <h6>Humidity:  %</h6>
//             <h6>Country:  </h6>
//         <p>Learn how to convert a string to HTML using JavaScript.</p>
//         </main>
//         `;
// resultsElement.innerHTML = responseHTML;

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
    const presentCity = inputSearchValue
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + presentCity + "&units=imperial&appid=" + APIKey;
    fetch(queryURL).then(response => {
        response.json().then(response => {
            // console.log(response);
            const htmlString = `
            <main class="presentDay">
            <h6 class="dates">Location: ${response.name} </h6>
            <h6>Weather: <img src="https://openweathermap.org/img/w/${response.weather[0].icon}.png" alt="Girl in a jacket">   </h6>
            <h6 class="futureText">Temp: ${response.main.temp} °F</h6>
            <h6 class="futureText">Wind: ${response.wind.speed} MPH</h6>
            <h6 class="futureText">Humidity: ${response.main.humidity} %</h6>
            <h6 class="futureText">Country: ${response.sys.country} </h6>
        </main>
        `;
        resultsElement.innerHTML = htmlString;
        
        // const convertStringToHTML = htmlString => {
        //     const parser = new DOMParser();
        //     const html = parser.parseFromString(htmlString, 'text/html');
            
        //     return html.body;
        // }
        // const body = convertStringToHTML(htmlString);
        
        // document.body.appendChild(body)
    })
})

var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
const city = inputSearchValue
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?&q=" + city + "&units=imperial&appid=" + APIKey
fetch(queryURL).then(response => {
    response.json().then(response => {
        console.log(response);
        const htmlString = `
        <main class="futureDay">
        <p class="fiveDay">Your 5 Day Forcast!☀️</p>
        <h1 class="dates">Date: ${response.list[4].dt_txt} </h1> 
        <h1 class="futureText">Weather: <img src="https://openweathermap.org/img/w/${response.list[4].weather[0].icon}.png"></h6>
        <h1 class="futureText">Temp: ${response.list[4].main.temp} °F</h1> 
        <h1 class="futureText">Wind: ${response.list[4].wind.speed} MPH</h1> 
        <h1 class="futureText">Humidity: ${response.list[4].main.humidity} %</h1> 

        <h2 class="dates">Date: ${response.list[12].dt_txt} </h2> 
        <h2 class="futureText">Weather: <img src="https://openweathermap.org/img/w/${response.list[12].weather[0].icon}.png"></h6>
        <h2 class="futureText">Temp: ${response.list[12].main.temp} °F</h2> 
        <h2 class="futureText">Wind: ${response.list[12].wind.speed} MPH</h2> 
        <h2 class="futureText">Humidity: ${response.list[12].main.humidity} %</h2>
         
        <h3 class="dates">Date: ${response.list[20].dt_txt} </h3>
        <h3 class="futureText">Weather: <img src="https://openweathermap.org/img/w/${response.list[20].weather[0].icon}.png"></h6>  
        <h3 class="futureText">Temp: ${response.list[20].main.temp} °F</h3> 
        <h3 class="futureText">Wind: ${response.list[20].wind.speed} MPH</h3> 
        <h3 class="futureText">Humidity: ${response.list[20].main.humidity} %</h3>
        
        <h4 class="dates">Date: ${response.list[28].dt_txt} </h4>
        <h4 class="futureText">Weather: <img src="https://openweathermap.org/img/w/${response.list[28].weather[0].icon}.png"></h6> 
        <h4 class="futureText">Temp: ${response.list[28].main.temp} °F</h4> 
        <h4 class="futureText">Wind: ${response.list[28].wind.speed} MPH</h4> 
        <h4 class="futureText">Humidity: ${response.list[28].main.humidity} %</h4>
         
        <h5 class="dates">Date: ${response.list[36].dt_txt} </h5> 
        <h5 class="futureText">Weather: <img src="https://openweathermap.org/img/w/${response.list[36].weather[0].icon}.png"></h6>  
        <h5 class="futureText">Temp: ${response.list[36].main.temp} °F</h5> 
        <h5 class="futureText">Wind: ${response.list[36].wind.speed} MPH</h5> 
        <h5 class="futureText">Humidity: ${response.list[36].main.humidity} %</h5> 
    </main>
    `;
    // function addimage() {
    //     var img = new Image();
    //     img.src = `https://openweathermap.org/img/w/${response.list[36].weather[0].icon}.png`
    //     img_home.appendChild(img);
    // }
    // addimage()
    
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

