var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
var Car = /** @class */ (function () {
    function Car(color, brand, vin, location, owner) {
        this.color = color;
        this.brand = brand;
        this.vin = vin;
        this.location = location;
        this.owner = owner;
    }
    // method
    Car.prototype.power = function (state) {
        if (state) {
            return "Starting Engine.";
        }
        else {
            return "Shutting down the engine.";
        }
    };
    return Car;
}());
// inheritance
var ToyotaCar = /** @class */ (function (_super) {
    __extends(ToyotaCar, _super);
    function ToyotaCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alloyWheels = true;
        _this.adjustableSuspension = true;
        return _this;
    }
    ToyotaCar.prototype.getBrand = function () {
        return this.brand;
    };
    return ToyotaCar;
}(Car));
var toyotaCar = new ToyotaCar("White", "Toyota", "2A", "Karachi");
console.log(toyotaCar);
// over written constructor
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(alloyWheels, color, brand, vin, location, owner) {
        var _this = _super.call(this, color, brand, vin, location, owner) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = alloyWheels;
        return _this;
    }
    Mercedes.prototype.getBrand = function () {
        return this.brand;
    };
    return Mercedes;
}(Car));
var mercedesCar = new Mercedes(false, "Black", "Mercedes", "1A", "Karachi", "Mohsin Munir");
console.log(mercedesCar);
