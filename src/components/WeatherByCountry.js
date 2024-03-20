import React, { useState } from 'react';
import Select from "react-select";
import { WeatherSelectStyles } from '../constants/weather';
import { WEATHER_API_BASE_URLS,WEATHER_API_KEY } from '../constants/api_endpoints';
import WeatherCard from './WeatherCard';

const WeatherByCountry = () => {
    const [selectedCountryData, setSelectedCountryData] = useState([]);
    const countries = [
        { id: 1, name: "Afghanistan" },
        { id: 2, name: "Albania" },
        { id: 3, name: "Algeria" },
        { id: 4, name: "Andorra" },
        { id: 5, name: "Angola" },
        { id: 6, name: "Antigua and Barbuda" },
        { id: 7, name: "Argentina" },
        { id: 8, name: "Armenia" },
        { id: 9, name: "Australia" },
        { id: 10, name: "Austria" },
        { id: 11, name: "Azerbaijan" },
        { id: 12, name: "Bahamas" },
        { id: 13, name: "Bahrain" },
        { id: 14, name: "Bangladesh" },
        { id: 15, name: "Barbados" },
        { id: 16, name: "Belarus" },
        { id: 17, name: "Belgium" },
        { id: 18, name: "Belize" },
        { id: 19, name: "Benin" },
        { id: 20, name: "Bhutan" },
        { id: 21, name: "Bolivia" },
        { id: 22, name: "Bosnia and Herzegovina" },
        { id: 23, name: "Botswana" },
        { id: 24, name: "Brazil" },
        { id: 25, name: "Brunei" },
        { id: 26, name: "Bulgaria" },
        { id: 27, name: "Burkina Faso" },
        { id: 28, name: "Burundi" },
        { id: 29, name: "Cabo Verde" },
        { id: 30, name: "Cambodia" },
        { id: 31, name: "Cameroon" },
        { id: 32, name: "Canada" },
        { id: 33, name: "Central African Republic" },
        { id: 34, name: "Chad" },
        { id: 35, name: "Chile" },
        { id: 36, name: "China" },
        { id: 37, name: "Colombia" },
        { id: 38, name: "Comoros" },
        { id: 39, name: "Congo, Democratic Republic of the" },
        { id: 40, name: "Congo, Republic of the" },
        { id: 41, name: "Costa Rica" },
        { id: 42, name: "Cote d'Ivoire" },
        { id: 43, name: "Croatia" },
        { id: 44, name: "Cuba" },
        { id: 45, name: "Cyprus" },
        { id: 46, name: "Czech Republic" },
        { id: 47, name: "Denmark" },
        { id: 48, name: "Djibouti" },
        { id: 49, name: "Dominica" },
        { id: 50, name: "Dominican Republic" },
        { id: 51, name: "East Timor (Timor-Leste)" },
        { id: 52, name: "Ecuador" },
        { id: 53, name: "Egypt" },
        { id: 54, name: "El Salvador" },
        { id: 55, name: "Equatorial Guinea" },
        { id: 56, name: "Eritrea" },
        { id: 57, name: "Estonia" },
        { id: 58, name: "Eswatini" },
        { id: 59, name: "Ethiopia" },
        { id: 60, name: "Fiji" },
        { id: 61, name: "Finland" },
        { id: 62, name: "France" },
        { id: 63, name: "Gabon" },
        { id: 64, name: "Gambia" },
        { id: 65, name: "Georgia" },
        { id: 66, name: "Germany" },
        { id: 67, name: "Ghana" },
        { id: 68, name: "Greece" },
        { id: 69, name: "Grenada" },
        { id: 70, name: "Guatemala" },
        { id: 71, name: "Guinea" },
        { id: 72, name: "Guinea-Bissau" },
        { id: 73, name: "Guyana" },
        { id: 74, name: "Haiti" },
        { id: 75, name: "Honduras" },
        { id: 76, name: "Hungary" },
        { id: 77, name: "Iceland" },
        { id: 78, name: "India" },
        { id: 79, name: "Indonesia" },
        { id: 80, name: "Iran" },
        { id: 81, name: "Iraq" },
        { id: 82, name: "Ireland" },
        { id: 83, name: "Israel" },
        { id: 84, name: "Italy" },
        { id: 85, name: "Jamaica" },
        { id: 86, name: "Japan" },
        { id: 87, name: "Jordan" },
        { id: 88, name: "Kazakhstan" },
        { id: 89, name: "Kenya" },
        { id: 90, name: "Kiribati" },
        { id: 91, name: "Korea, North" },
        { id: 92, name: "Korea, South" },
        { id: 93, name: "Kosovo" },
        { id: 94, name: "Kuwait" },
        { id: 95, name: "Kyrgyzstan" },
        { id: 96, name: "Laos" },
        { id: 97, name: "Latvia" },
        { id: 98, name: "Lebanon" },
        { id: 99, name: "Lesotho" },
        { id: 100, name: "Liberia" },
        { id: 101, name: "Libya" },
        { id: 102, name: "Liechtenstein" },
        { id: 103, name: "Lithuania" },
    ]
    
    const handleChange= async(option)=>{
        // on change event of,we are calling the current weather API with required params
        let searchedValues = []
        option?.map((obj,i)=>searchedValues.push(obj?.name))
        const data = await fetch(`${WEATHER_API_BASE_URLS.CURRENT_WEATHER_API_BASE_URL}?q=${searchedValues?.toString()}&appid=${WEATHER_API_KEY}`);
        var result = await data.json()
        setSelectedCountryData(result)
    }

  return (
    <div className='container-fluid'>
        <div className="row justify-content-center">
            <div className="col-md-10 col-12 mx-auto">
              <div className='countries_blk'>
            <Select
                options={countries}
                getOptionLabel={(option)=>option.name}
                getOptionValue={(option)=>option.id}
                styles={WeatherSelectStyles}
                onChange={(option)=>handleChange(option)}
                isMulti
            />
            </div>
            <WeatherCard selectedCountryData={selectedCountryData} />
      </div>
      </div>
    </div>
  )
}

export default WeatherByCountry
