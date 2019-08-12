const weather = document.querySelector(".js-weather");
const API_KEY = "62afa2717888d7195bc15a6ce8fc8bf0";
const COORDS = 'coords';

/* 지금 만들어 지는 함수는 Javascript에서 특정 URL을 호출 하는 법을 작성 할 것이다. 
   이부분이 Javascript를 강력하게 만들어준 원인이다. 왜냐면 Javascript는 웹사이트로 Request(요청)를 보내고 응답을 통해서 데이터를 얻을 수 있는데, 
   가져온 데이터를 Refresh 없이도 나의 웹사이트에 적용 시킬 수 있기 때문이다. 즉, 이메일을 확인할 때, 웹사이트를 새로고침 하지 않아도 실시간으로 메일이 오는 것을 확인 할 수 있다.
   Javascript가 보이지 않는 곳에서 계속 데이터를 가져오고 있기 때문이다. */
function getWeather(lat, lng) {
    //API의 데이터를 가져올때 fetch를 써주면 된다.
    //또한 얻고자 하는 데이터를 얻어올때 우리가 getWeather 함수의 인자를 넣어주고 (위도,경도 두가지를 가져올 것이니까) 마지막으로 우리의 appid 즉, 수여받은 key로 확인하면 된다.
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    //fetch의 작업이 끝나고 우리는 then 함수를 이용해서 요청 해서 얻은 reponse.json 데이터를 가져온다. Javascript Object를 말하는 것이다. 즉, 해당 API(날씨,위치) 데이터를! 그것이 JSON이다.
    //더 정리하면 첫번째 then은 우리가 가져온 Json 데이터를 갈무리 하고, 두번째 json은 가져온 것을 그대로 보여주게 되고 이 데이터를 사용하면 된다.
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // 이 곳에서 getWeather 작동 된다.
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();