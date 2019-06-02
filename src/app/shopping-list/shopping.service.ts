import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientChnage = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChnage.emit(this.ingredients.slice());
  }

  addRecipeIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChnage.emit(this.ingredients.slice());
  }
}
