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
var Vehicle = /** @class */ (function () {
    function Vehicle(color, height, width, length, weight) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
    return Vehicle;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(wheels, model, make, color, height, width, length, weight) {
        var _this = _super.call(this, color, height, width, length, weight) || this;
        _this.wheels = wheels;
        _this.model = model;
        _this.make = make;
        return _this;
    }
    Mercedes.prototype.speed = function () {
        return "Mercedes Class Average speed is";
    };
    return Mercedes;
}(Vehicle));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(rareBack, averageSpeed, wheels, model, make, height, widht, length, weight, color) {
        var _this = _super.call(this, wheels, model, make, height, widht, length, weight, color) || this;
        _this.rareBack = rareBack;
        _this.averageSpeed = averageSpeed;
        return _this;
    }
    return SUV;
}(Mercedes));
var Core = /** @class */ (function (_super) {
    __extends(Core, _super);
    function Core(hatchback, averageSpeed, wheels, model, make, height, widht, length, weight, color) {
        var _this = _super.call(this, wheels, model, make, height, widht, length, weight, color) || this;
        _this.hatchback = hatchback;
        _this.averageSpeed = averageSpeed;
        return _this;
    }
    Core.prototype.speed = function () {
        console.info("Mercedes Core Class has following features Speed: ".concat(this.averageSpeed, " Wheels: ").concat(this.wheels));
        return " ";
    };
    return Core;
}(Mercedes));
var core = new Core(false, "12 Km/h", "4 Wheels", 2019, "Mercedes USA", "1.5m", "2.5m", "10m", "100kg", "Green");
console.log(core.speed());
