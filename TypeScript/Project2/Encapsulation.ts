abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    // private always be start with underscore _
    private _statePrivacy: string;
    private _leader: string;
    protected region: string;
    constructor(name: string, language: string, population: number, populationGrowthRate: number, _statePrivacy: string, _leader: string, region: string) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader
        this.region = region
    }
    public abstract populationGrowth(): number;
    // encapsulation
    public get stateSecret(){
        return this._statePrivacy
    }
    // setter & setter
    public get leader(){
        return this._leader
    }
    public set leader(newLeader: string){
        this._leader = newLeader
    }
    // polymorphism
    public greeting(): string{
        return "Hello"
    }
}
class OICCountry extends Country{ 
    constructor(name: string, language: string, population: number, populationGrowthRate: number, statePrivacy: string, stateLeader: string, region: string) {
        super(name, language, population, populationGrowthRate, statePrivacy, stateLeader, region);
    }
    public populationGrowth(): number {
        this.population = this.population * (this.populationGrowthRate / 100);
        return this.population
    }
    // method overriding
    public greeting(): string {
        return "Assalam-O-Alykum"
    }
    // proteced values accessible using getter n setter
    public getRegion(){
        return this.region
    }
    public setRegion(newRegion: string){
        return this.region = newRegion
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 15, 2, "Pakistan's secret", "IK", "Asia");
// Failure because _leader is private property
// Pakistan._leader
// success because leader is public property and getting the values using public getter and setter
console.log(Pakistan.leader);
console.log('Region: ', Pakistan.getRegion());
Pakistan.leader = 'Imran khan'
console.log(Pakistan.leader);
Pakistan.setRegion("South Asia");
console.log('Region: ', Pakistan.getRegion());
