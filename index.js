const input=document.getElementById("city-input");
const button=document.getElementById('city-button');
const city=document.getElementById("city");
const time=document.getElementById("time");
const temp=document.getElementById("temp");


async function getdata(cityname){
    if(cityname==""){
        alert("Please enter a city name");
    }
    const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=apikey=${cityname}&aqi=yes`
    );
    return await response.json();

}
button.addEventListener("click", async () => {
    console.log("button is clicked");
    const result= await getdata(input.value);
    city.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
    time.innerText=result.location.localtime;
    temp.innerText=result.current.temp_c;
})
