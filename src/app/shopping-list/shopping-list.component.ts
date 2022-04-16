import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListSv: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListSv.getIngredients();
  }

  onIngredientAdd(e: any){
    this.ingredients.push(e);
  }
}
