const cityname = document.querySelector('input');
const cloud = document.querySelector('.cloud img');
document.querySelector('button').addEventListener('click', ()=>{
    const city = cityname.value;

    const apikey = "c3db9e860ca8973cecade848dcf2b5ef";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

async function checkweather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.temp h1').innerHTML= data.main.temp;
    document.querySelector('.city h1').innerHTML = data.name;
    document.querySelector('.p1 p').innerHTML = data.main.humidity;
    document.querySelector('.winddetail p').innerHTML = data.wind.speed + "KM/H";
    if(data.weather[0].main == "Clear"){
        cloud.src = "./clear.png";
    }
    if (data.weather[0].main == "Mist") {
        cloud.src = "./mist";
    } 
    if(data.weather[0].main == "Clouds"){
        cloud.src = "./clouds.png";
    }
    if(data.weather[0].main == "Drizzle"){
        cloud.src = "./drizzle.png";
    }
    if(data.weather[0].main == "Rain"){
        cloud.src = "./rain.png";
    }
    if(data.weather[0].main == "Snow"){
        cloud.src = "./snow.png";
    }
}
checkweather();
})
