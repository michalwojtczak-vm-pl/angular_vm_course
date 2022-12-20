import { CarInterface } from '../interfaces/car.interface';
import { TypesEnum } from '../enums/types.enum';

export class NewClass {
    private carName = 'cos tam';
    private vehicle: string;
    private countCars: number;
    private smth: any;
    private arrayOfCars: string[];
    private user = {
        name: 'Michal'
    }
    private car: {
        name: string,
        ordering: 'ASC' | 'DESC'
    }
    private carType: TypesEnum;
    private arrayOfUsers2: { name: string }[] = [];

    private superCar: CarInterface;

    constructor() {
        this.car = {name: 'Audi', ordering: 'ASC'};
        this.vehicle = 'cos tam 2';
        this.countCars = 12;
        this.arrayOfCars = ['ss', 'ss'];
        this.arrayOfUsers.push({name: 'Michal'});
        this.superCar = {
            name: 'ss',
            size: 1
        }

        this.carType = TypesEnum.AUDI; // 'AUDI'
    }

    makeCar(car: { name: string }):boolean {
        return true;
    }

    makeSuperCar(car: CarInterface): boolean {
        return false;
    }
}

export class Cos extends NewClass {
    constructor() {
        super();
    }
}