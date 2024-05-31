const WEATHERURL = 'https://api.openweathermap.org/data/2.5/weather';
 
async function getWeather(city) {
    const key = 'a352db877902bafba7d0ed23e7660331';
    const response = await fetch(`${WEATHERURL}?q=${city}&appid=${key}&units=metric`);
    const data     = await response.json();
    console.log(data);
    loadScreen(data);
}
 
window.onload = function () {
    getWeather('Dordrecht');
}