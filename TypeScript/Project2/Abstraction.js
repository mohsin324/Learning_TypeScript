"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowthRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowthRate) {
        return _super.call(this, name, language, population, populationGrowthRate) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (this.populationGrowthRate / 100);
        return this.population;
    };
    return OICCountry;
}(Country));
var Pakistan = new OICCountry("Pakistan", "Urdu", 15, 2);
console.log(Pakistan);
Pakistan.populationGrowth();
console.log(Pakistan);
Pakistan.populationGrowth();
console.log(Pakistan);
exports.default = {};
