document.getElementById('search-city').addEventListener("click", function() {
            const inputCity = document.getElementById('enter-city').value;
            getWeather(inputCity);
        })

        function getWeather(inputCity) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=066e72767073fe9c8e8a9910d0d98ae1`)
                .then(response => response.json())
                .then(data => {
                    const weather = data.main;
                    const farenheit = weather.temp;
                    const weatherUnit = farenheit - 273.15;
                    document.getElementById("temperature").innerText = Math.round(weatherUnit);
                    const cityName = data.name;
                    document.getElementById("city").innerText = cityName;
                    console.log(data);
                    const status = data.weather[0].main;
                    document.getElementById('status').innerText = status;
                    const imageTag = document.getElementById('status-img');
                    const icon = data.weather[0].icon
                    imageTag.setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`);
                })
                .catch(error => {
                    console.log("error, please try again");
                })
        }
