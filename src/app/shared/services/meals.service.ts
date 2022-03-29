import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _httpClient: HttpClient) { }

  getRandomMeals() {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
  }

  getMeal(id: any) {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

  getIngredients() {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  }
  getMealsByingredient(ingredient: string) {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  }

  getMeals(search: string) {
    console.log(search);
    return this._httpClient.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  }



}
