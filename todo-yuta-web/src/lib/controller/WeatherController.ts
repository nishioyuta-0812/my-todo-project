import { injectable } from 'tsyringe';
import { City, CityNumber} from '../domain/weather';
import { WeatherUseCase } from '../usecase/WeatherUseCase';


@injectable()
export class WeatherController{
    constructor(readonly weatherUseCase: WeatherUseCase){}


    async getWeather(city: string, cityNumber: number): Promise<WeatherUnit>{
        
        const weather = await this.weatherUseCase.getWeather(new City(city),new CityNumber(cityNumber))

        return {

            city: weather.city.value,
            condition: weather.condition.value,
            temp: weather.temp.value,
            icon: weather.icon.value
        }


        
    }

}

export interface WeatherUnit {

    city: string;
    condition: string;
    temp: number;
    icon: string;

}