import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';
import { MealsByIngredientComponent } from './meals-by-ingredient/meals-by-ingredient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdministratorComponent,
    IngredientsComponent,
    MealsComponent,
    MealComponent,
    ProfileComponent,
    MealsByIngredientComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministratorModule { }
