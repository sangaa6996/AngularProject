import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('TEST', ' JUST TEST', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg'),
    new Recipe('TEST 2', ' JUST TEST 2', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg')
  ]

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();//Returncopyarrayinsteadofrealarray}}
  }
    constructor() { }
  }
