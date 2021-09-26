import axios from "axios";
import { injectable } from "tsyringe";


@injectable()
export class WeatherDriver{

    async getWeather(city: string, cityNumber: number): Promise<WeatherJson>{

        return await axios.get<WeatherJson>(
            `${process.env.REACT_APP_OW_API_URL}/weather/?q=${city},${cityNumber}&APPID=${process.env.REACT_APP_OW_API_KEY}`)
            .then(res => {
                console.log(res.data);
                return res.data;
            });

    }

}

export type WeatherJson = {
    weather: Array<WeatherDescJson>
    main: WeatherMainJson
    name: string


}

export type WeatherDescJson = {

    main: string
    icon: string

}


export type WeatherMainJson = {
    temp: number
}