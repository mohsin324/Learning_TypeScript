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
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowthRate, _statePrivacy, _leader, region) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
        this.region = region;
    }
    Object.defineProperty(Country.prototype, "stateSecret", {
        // encapsulation
        get: function () {
            return this._statePrivacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "leader", {
        // setter & setter
        get: function () {
            return this._leader;
        },
        set: function (newLeader) {
            this._leader = newLeader;
        },
        enumerable: false,
        configurable: true
    });
    // polymorphism
    Country.prototype.greeting = function () {
        return "Hello";
    };
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowthRate, statePrivacy, stateLeader, region) {
        return _super.call(this, name, language, population, populationGrowthRate, statePrivacy, stateLeader, region) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (this.populationGrowthRate / 100);
        return this.population;
    };
    OICCountry.prototype.greeting = function () {
        return "Assalam-O-Alykum";
    };
    // proteced values accessible
    OICCountry.prototype.getRegion = function () {
        return this.region;
    };
    OICCountry.prototype.setRegion = function (newRegion) {
        return this.region = newRegion;
    };
    return OICCountry;
}(Country));
var Pakistan = new OICCountry("Pakistan", "Urdu", 15, 2, "Pakistan's secret", "IK", "Asia");
// Failure because _leader is private property
// Pakistan._leader
// success because leader is public property and getting the values using public getter and setter
console.log(Pakistan.leader);
console.log('Region: ', Pakistan.getRegion());
Pakistan.leader = 'Imran khan';
console.log(Pakistan.leader);
Pakistan.setRegion("South Asia");
console.log('Region: ', Pakistan.getRegion());
