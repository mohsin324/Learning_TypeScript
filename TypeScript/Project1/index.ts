abstract class  Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    constructor (
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ){
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }
    public abstract populationGrowth(): number;
}
class OICCountry extends Country{
    constructor (
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ){
        super(name, language, population, populationGrowthRate);
    }
    public populationGrowth(): number{
        this.population = this.population * this.populationGrowthRate
        return this.population
    }
}
let Paksitan = new OICCountry("Pakistan", "Urdu", 150, 2.5);
console.log(Paksitan)
console.info(Paksitan)
console.log(Paksitan.language)
