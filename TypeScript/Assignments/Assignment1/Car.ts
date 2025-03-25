class Vehicle {
    constructor(color: string, height: string, width: string, length: string, weight: string){
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
    public color: string;
    public height: string;
    public width: string;
    public length: string;
    public weight: string;
}
class Mercedes extends Vehicle {
    constructor (wheels: string, model: number, make: string, color: string, height: string, width: string, length: string, weight: string){
        super(color, height, width, length, weight);
        this.wheels = wheels;
        this.model = model;
        this.make = make;
    }
    public wheels: string;
    public model: number;
    public make: string;
    // method
    public speed(): string{
        return "Mercedes Class Average speed is"
    }
}
class SUV extends Mercedes {
    constructor(rareBack: boolean, averageSpeed: string, wheels: string, model: number, make: string, height: string, widht: string, length: string, weight: string, color: string){
        super(wheels, model, make, height, widht, length, weight, color);
        this.rareBack = rareBack;
        this.averageSpeed = averageSpeed;
    }
    rareBack: Boolean;
    averageSpeed: string;
}
class Core extends Mercedes {
    constructor(hatchback: boolean, averageSpeed: string, wheels: string, model: number, make: string, height: string, widht: string, length: string, weight: string, color: string){
        super(wheels, model, make, height, widht, length, weight, color);
        this.hatchback = hatchback;
        this.averageSpeed = averageSpeed;
    }
    hatchback: Boolean;
    averageSpeed: string;
    // method overriding
    public speed(): string {
        console.info(`Mercedes Core Class has following features Speed: ${this.averageSpeed} Wheels: ${this.wheels}`)
        return " "
    }
}
let core = new Core(false, "12 Km/h", "4 Wheels", 2019, "Mercedes USA", "1.5m", "2.5m", "10m", "100kg", "Green");
console.log(core.speed());
