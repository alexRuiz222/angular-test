import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MealComponent } from './meal/meal.component';
import { MealsByIngredientComponent } from './meals-by-ingredient/meals-by-ingredient.component';
import { MealsComponent } from './meals/meals.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: AdministratorComponent,
  data: {
    title: 'Administrator'
  }
}, {
  path: 'ingredients',
  component: IngredientsComponent,
  data: {
    title: 'Ingredientes populares'
  }
},
{
  path: 'meals',
  component: MealsComponent,
  data: {
    title: 'Platillos'
  }
},
{
  path: 'meal/:id',
  component: MealComponent,
  data: {
    title: 'Platillo'
  }
}, {
  path: 'profile',
  component: ProfileComponent,
  data: {
    title: 'Mi perfil'
  }
},
{
  path: 'meals_by_ingredient/:ingredient',
  component: MealsByIngredientComponent,
  data: {
    title: 'Platillos por ingrediente'
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
