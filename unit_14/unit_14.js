//-----------------------------параметры fetch запроса
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "1def72e2baf40e89deb95005575e774b"
}

//-----------------------------обьект городов
const cities = {
    703448: "Kyiv",
    704147: "Kremenchuk",
    696643: "Poltava",
    706483: "Kharkiv",
}

//-----------------------------вывод обьекта городов
const select = document.createElement('select');
document.querySelector('.container-weather').prepend(select);
select.classList.add('weather__list');
select.id = 'city';
//----------------------------- перебор массива городов вывод option
for (let key in cities) {
    const city = cities[key];
    const option = document.createElement('option');
    option.textContent = city;
    option.value = key;
    select.prepend(option);
}

//----------------------------- функция fetch, получение данных
function getWeather() {
    const cityId = document.querySelector('#city').value;

    //-----------------------------fetch запрос
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

//-----------------------------вывод функции отображения  блока погоды
function showWeather(data) {
    console.log(data);
    // здесь вы выводите на страницу
    document.querySelector('.weather_name').innerHTML = data.name;
    document.querySelector('.weather_deg').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.weather_description').innerHTML = data.weather[0].description;
    document.querySelector('.weather_pressure').innerHTML = data.main.pressure;
    document.querySelector('.wind_direction').innerHTML = data.wind.deg + '&deg;';
    document.querySelector('.wind_speed').innerHTML = data.wind.speed;
}

//----------------------------- запуск функции отображения Погоды 
getWeather();
//----------------------------- запуск функции отображения Погоды  при смене селекта
document.querySelector('#city').onchange = getWeather;