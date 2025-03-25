// class
class Car {
    constructor(color: string, brand: string, vin: string | number, location: string, owner?: string){
        this.color = color;
        this.brand = brand;
        this.vin = vin;
        this.location = location;
        this.owner = owner
    }
    public color: string;
    protected brand: string;
    // property override
    readonly vin: string | number;
    private location: string;
    // owner!: string;
    // optional
    owner?: string;
    // method
    power(state: boolean){
        if(state) {
            return "Starting Engine."
        }else{
            return "Shutting down the engine."
        }
    }
}
// inheritance
class ToyotaCar extends Car{
    alloyWheels = true;
    adjustableSuspension = true;
    getBrand(){
        return this.brand
    }

}
let toyotaCar = new ToyotaCar("White", "Toyota", "2A", "Karachi");
console.log(toyotaCar);
// over written constructor
class Mercedes extends Car{
    constructor(alloyWheels: boolean, color: string, brand: string, vin: string, location: string, owner?: string){
        super(color, brand, vin, location, owner)
        this.alloyWheels = alloyWheels
    }
    alloyWheels: boolean;
    adjustableSuspension = true;
    getBrand(){
        return this.brand
    }
}
let mercedesCar = new Mercedes(false, "Black", "Mercedes", "1A", "Karachi", "Mohsin Munir");
console.log(mercedesCar)


