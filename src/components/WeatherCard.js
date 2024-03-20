import React from 'react';

const WeatherCard = (props) => {
    const { selectedCountryData } = props;
    console.log("...............selectedCountryData",selectedCountryData)
    
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className='weather_block'>
        <div class="tempInformation">
                        <div class="top_layer">
                            <p id="day">{formattedDate}</p>
                            <p id="today_date">{formattedTime}</p>
                        </div>

                        <div class="main_layer ">
                            {selectedCountryData?.name &&
                                <p >Country - {selectedCountryData?.name}</p> }
                                { selectedCountryData?.main?.temp && 
                                <p >Temperature - {selectedCountryData?.main?.temp}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Feels Like - {selectedCountryData?.main?.feels_like}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Temperature Min - {selectedCountryData?.main?.temp_min}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Temperature Max - {selectedCountryData?.main?.temp_max}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Pressure - {selectedCountryData?.main?.pressure}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Humidity - {selectedCountryData?.main?.humidity}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Sea Level - {selectedCountryData?.main?.sea_level}</p>}
                                { selectedCountryData?.main?.temp && 
                                <p >Ground Level - {selectedCountryData?.main?.grnd_level}</p>}
                        </div>
                    </div>
    </div>
  )
}

export default WeatherCard
