import './App.css';
import { useState ,useEffect } from "react";
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
  const[time,setTime]=useState(new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}));
  const[date,setDate]=useState(new Date().toLocaleDateString('en-IN',{month:'short',year:'numeric',day:'numeric',weekday:'long'}));
  const[longitude,setLongitude]=useState('');
  const[latitude,setLatitude]=useState('');
  
  setInterval(() => {
    var  date=new Date().toLocaleDateString('en-IN',{month:'short',year:'numeric',day:'numeric',weekday:'long'})
    var  time=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true})
    setTime(time);
    setDate(date);
  }, 1000);
  const getCordinate=(position)=>{
    
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    
 
   }
  
 

    
    window.navigator.geolocation.getCurrentPosition(getCordinate);
    console.log(latitude);
     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6e02389f2b706e7446912cdf8b9ed96d`).then((response) => {
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
       
      });
    
   // console.log(weather);
  
  const btnrefreshClick=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6e02389f2b706e7446912cdf8b9ed96d`).then((response) => {
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
      
      <span class="date">{date}</span><br></br>
      <span class="time">{time}</span>
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
