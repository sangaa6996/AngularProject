import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  constructor(private recipeSv: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSv.recipeSelected.emit(this.recipe);
  }
}
