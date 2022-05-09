import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('TEST', ' JUST TEST', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('TEST 2', ' JUST TEST 2', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [
      new Ingredient('Bun', 1),
      new Ingredient('Meat', 20)
    ])
  ]

  recipeSelected = new EventEmitter<Recipe>();
  recipeEdited = new EventEmitter<number>();

  getRecipes(index: number) {
    return this.recipes[index];//Returncopyarrayinsteadofrealarray}}
  }

  getRecipe() {
    return this.recipes;//Returncopyarrayinsteadofrealarray}}
  }
  constructor(private slService: ShoppingListService) { }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
