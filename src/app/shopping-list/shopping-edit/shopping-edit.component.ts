import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListSv: ShoppingListService) { }
  ingredient: Ingredient;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  ngOnInit(): void {
    this.shoppingListSv.startedEditing.subscribe((index: any) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListSv.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    this.ingredient = new Ingredient(
      value.name,
      value.amount
    )
    console.log(this.ingredient);
    if (this.editMode) {
      this.shoppingListSv.updateIngredients(this.editedItemIndex, this.ingredient)
    } else {
      this.shoppingListSv.addIngredient(this.ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingListSv.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
