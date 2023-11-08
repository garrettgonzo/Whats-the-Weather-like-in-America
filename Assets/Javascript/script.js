console.log("dc7271cf24099ef606a3cfa6b3d2e65f");
var APIKey = "dc7271cf24099ef606a3cfa6b3d2e65f";
const city = "London"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL).then(response => {
    response.json().then(response => {
        console.log(response);
        const htmlString = `
            <main>
                <h1>temp:${response.main.temp} </h1>
                <h1>humidity:${response.main.humidity} </h1>
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
