import { injectable } from "tsyringe";
import { City, CityNumber, Condition, ConditionIcon, Temperature, Weather } from "../domain/weather";
import { WeatherDriver } from "../driver/WeatherDriver";
import WeatherPort from "../port/WeatherPort";


@injectable()
export class WeatherGateway implements WeatherPort{

    constructor(readonly weatherDriver: WeatherDriver){}

    async getWeather(city: City, cityNumber: CityNumber): Promise<Weather> {

        const weatherJson = await this.weatherDriver.getWeather(city.value, cityNumber.value)

        return new Weather(new City(weatherJson.name),
            new Condition(weatherJson.weather[0].main),
            new Temperature(weatherJson.main.temp),
            new ConditionIcon(weatherJson.weather[0].icon)
        );
    }
    
}