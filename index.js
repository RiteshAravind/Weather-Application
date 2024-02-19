function weather(){

   var city = document.querySelector("#input").value;
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe624200c35ee4c0282f0d6006348776`

    fetch(url).then(function(res){

    return res.json()

    }).then(function(res){
    console.log(res)
    append(res)

    }).catch(function(err){
        console.log("err")
    })

}


// GPS
function getDatalocation( lat,lon){

    let city = document.querySelector("#input").value
   
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe624200c35ee4c0282f0d6006348776`
   
   
    fetch(url).then(function(res){
       return res.json()
       
       }).then(function(res){
   
           append(res)
       }).catch(function(err){
           console.log("err")
       })
   
   
   }

function gps(){

    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        var crd = position.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getDatalocation( crd.latitude,crd.longitude)
      }

}


function append(data){

    let container = document.querySelector("#container")
    container.textContent = null;
    

    let map = document.querySelector("#gmap_canvas")

    let box = document.createElement("div")
    
  
    let name = document.createElement("p");
    let weather =  document.createElement("p");
    let sunrise =  document.createElement("p");
    let sunset =  document.createElement("p");
    let min_temp =  document.createElement("p");
    let max_temp =  document.createElement("p");
    let humidity =  document.createElement("p");


    box.setAttribute("id","box");

    name.textContent = `City : ${data.name}`;
    weather.textContent = `Weather : ${data.weather.main}`;
    sunrise.textContent = `Sunrise : ${data.sys.sunrise}`;
    sunset.textContent = `Sunset : ${data.sys.sunset}`;
    max_temp.textContent = `Max-Temperature : ${Math.ceil(data.main.temp_max-273)}'C`;
    min_temp.textContent = `Min-Temperature : ${Math.floor(data.main.temp_min-273)}'C`;
    humidity.textContent = `Humidity  : ${data.main.humidity}`;

    map.src = src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    box.append(name,weather,sunrise,sunset,max_temp,min_temp,humidity);
    container.append(box)
}


