import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Hamburger', 
      'This is just a test', 
      'https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Pommes', 12)
      ]),
    new Recipe(
      'A tasty Pasta', 
      'Just a test', 
      'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
      [
        new Ingredient('Spagetti', 3),
        new Ingredient('Tomatoes', 4),
        new Ingredient('Parmesan', 2)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
