import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { WeatherController, WeatherUnit } from '../lib/controller/WeatherController';
import './weather.scss';

function Weather(){

    const [weather, setWeater] = useState<WeatherUnit>({city: '', condition: '', temp: 0, icon: ''})

    const f = async (city: string, cityNumber: number) => {

        const weatherEntity = await container.resolve(WeatherController).getWeather(city,cityNumber);
        setWeater(weatherEntity)

    }

    useEffect(() => {
        f('Fujimino',3560050);
    }, [])


    return (
        <div className='weather'>
            <p>{weather.city}</p>
            <p>{weather.temp}°C</p>
            <p>{weather.condition}</p>
            <img src={`${process.env.REACT_APP_OW_ICON_URL}/${weather.icon}.png`} alt="" />
        </div>
    );


}

export default Weather;

