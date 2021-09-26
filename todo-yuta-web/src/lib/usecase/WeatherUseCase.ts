import { inject, injectable } from "tsyringe";
import { City, CityNumber, Weather } from "../domain/weather";
import WeatherPort from '../port/WeatherPort';

@injectable()
export class WeatherUseCase{

    constructor(@inject('WeatherPort')readonly weatherPort: WeatherPort){}

    async getWeather(city: City, cityNumber: CityNumber): Promise<Weather>{
        return await this.weatherPort.getWeather(city,cityNumber)
    }

}