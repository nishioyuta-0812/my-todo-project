export class Weather {

    constructor(city: City,condition: Condition, temp: Temperature, icon: ConditionIcon){
        this.city = city;
        this.condition = condition;
        this.temp = temp;
        this.icon = icon;
    }

    city: City
    condition: Condition
    temp: Temperature
    icon: ConditionIcon
}


export class City{

    constructor(city: string){
        this.value = city;
    }

    value: string
}

export class Condition{
    constructor(condition: string){
        this.value = condition;
    }

    value: string
}

export class Temperature{
    constructor(temperature: number){
        this.value = temperature;
    }

    value: number
}

export class ConditionIcon{
    constructor(conditionIcon: string){
        this.value = conditionIcon;
    }

    value: string
}

export class CityNumber{
    constructor(cityNumber: number){
        this.value = cityNumber;
    }

    value: number 
}