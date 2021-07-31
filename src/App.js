import './App.css';
import { useState ,useEffect } from "react";
import DateTime  from "./DateTime";
import axios from "axios";
function App() {
  const[weather,setWeather]=useState({
    temp:"",
    humidity:"",
    wind:"",
    desc:"",
    sunset:"",
    sunrise:"",
    feels_like:"",
    city:"",    
    visibility:"",
    country:"",
    icon:"",
  
  });
  const[longitude,setLongitude]=useState('');
  const[latitude,setLatitude]=useState('');
  
  
  
 
    useEffect(()=>{
     
      navigator.geolocation.getCurrentPosition((pos) =>{
       
        console.log(pos.coords.longitude);
        setLongitude(pos.coords.longitude) // store data in usestate
         setLatitude(pos.coords.latitude) // Display your values
         axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=ff47805b025d596a293f64bd26066486`).then((response) => {
          const d=response.data;
          var set=d.sys.sunset;
          var rise=d.sys.sunrise;
          var options = { hour: '2-digit', minute: '2-digit' ,hour12: false };
          let sdate = new Date(set*1000).toLocaleTimeString('en-IN',options);
          let rdate = new Date(rise*1000).toLocaleTimeString('en-IN',options);
            setWeather({
              temp:d.main.temp,
              
              humidity:d.main.humidity,
              wind:d.wind.speed,
              desc:d.weather[0].description,
              sunset: sdate,
              sunrise:rdate,
              feels_like:d.main.feels_like,
              city:d.name,    
              visibility:d.visibility,
              country:d.sys.country,
              icon:'http://openweathermap.org/img/w/'+d.weather[0].icon+'.png',
              
                             
            })
      })




        })
      
      
      }, [])
    
    const btnrefreshClick=()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ff47805b025d596a293f64bd26066486`).then((response) => {
        const d=response.data;
        var set=d.sys.sunset;
        var rise=d.sys.sunrise;
        var options = { hour: '2-digit', minute: '2-digit' ,hour12: false };
        let sdate = new Date(set*1000).toLocaleTimeString('en-IN',options);
        let rdate = new Date(rise*1000).toLocaleTimeString('en-IN',options);
          setWeather({
            temp:d.main.temp,
            
            humidity:d.main.humidity,
            wind:d.wind.speed,
            desc:d.weather[0].description,
            sunset: sdate,
            sunrise:rdate,
            feels_like:d.main.feels_like,
            city:d.name,    
            visibility:d.visibility,
            country:d.sys.country,
            icon:'http://openweathermap.org/img/w/'+d.weather[0].icon+'.png',
            
                           
          })
    })
  
     
  
     
      
    }
  
  return (
    <div className="main">
     <div className="container">
  <div className="card">
      <h2 class="city"><i className="fa fa-map-marker"></i> <span id="location">{weather.city},{weather.country}</span></h2>
      
      <DateTime></DateTime>
      <h4><span id="temp">{Math.ceil(weather.temp)}</span><sup>o</sup>C</h4>
       
      <img id="icon" src={weather.icon}/>
      <h5 id="weather">{weather.desc}</h5>
      <div className="info">
        <span class="text"><i class="fas fa-fog"></i>Visibility:{weather.visibility/1000} KM</span>&nbsp;|&nbsp;
        <span class="text"><i class="fas fa-wind"></i>Wind:{weather.wind}</span><br></br>
        <span class="text"><i class="fas fa-sunrise"></i>Sunrise:{weather.sunrise.toUpperCase()}</span>&nbsp;|&nbsp;
        <span class="text"><i class="fas fa-sunset"></i>Sunrset:{weather.sunset.toUpperCase()}</span><br></br>
        <span class="text">Feels Like:{weather.feels_like}</span>&nbsp;|&nbsp;
        <span class="text"><i class="fas fa-dewpoint"></i> Humidity:{weather.humidity}%</span>
        </div>
      <button onClick={btnrefreshClick} className="refresh"><i class="fas fa-sync-alt"></i></button>
  </div>
</div>
</div>

    
  );
}

export default App;
