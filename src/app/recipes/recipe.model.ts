import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: any;
    public description: any;
    public imagePath: any;
    public ingredients : Ingredient[];
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}