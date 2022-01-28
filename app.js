window.addEventListener('load', () => {
    let long;
    let lat;
    const API_KEY = '6bd6ccda5b027c059379b67bf5058f0c';
    const city = document.querySelector('#city');
    const temp = document.querySelector('#temp');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude

            const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
            fetch(API)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const weather = data.name;
                    console.log(weather);
                    city.textContent = data.name;
                    temp.textContent = data.main.temp;
                })
        })
    }
})