console.log("dc7271cf24099ef606a3cfa6b3d2e65f");
var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
const city = "London"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL).then(response => {
    response.json().then(response => {
        console.log(response);
    })
})