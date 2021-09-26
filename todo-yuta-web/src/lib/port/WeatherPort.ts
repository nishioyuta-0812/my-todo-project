import { City, CityNumber, Weather } from "../domain/weather";

export default interface WeatherPort {
    getWeather(city: City, cityNumber: CityNumber): Promise<Weather>


}