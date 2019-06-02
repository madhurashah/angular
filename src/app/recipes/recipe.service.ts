import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'this is simply test recipe',
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 10),

    ]),
    new Recipe('A Test Recipe2', 'this is simply test recipe',
    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
    [
      new Ingredient('Bread', 10),
      new Ingredient('meat', 1),
    ])
  ];

  constructor(private shoppingService: ShoppingService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeById(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addRecipeIngredients(ingredients);
  }
}
