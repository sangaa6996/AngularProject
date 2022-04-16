import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  
  constructor(private recipeSv: RecipeService) { }
  selectedRecipe : Recipe;

  ngOnInit(): void {
    this.recipeSv.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }

}
