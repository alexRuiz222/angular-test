import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealsService } from 'src/app/shared/services/meals.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private _MealsService: MealsService, private router: Router) { }
  ingredients: any;
  getIngredients() {
    this._MealsService.getIngredients().subscribe((data: any) => {
      ({ meals: this.ingredients } = data);
      // console.log(meals[0]);
    }, err => {

      console.log('error: ', err)
      // if (!err.error.lengthComputable) {
      //   this.toastr.error('Se perdio la conexión con el servidor', 'Ocurrio algo!', this.optToast);
      //   return;
      // }
      // const { msg_es } = err.error;
      // this.toastr.error(undefined, 'Ocurrio algo!', this.optToast);
    });
  }

  viewMeals(ingredient: any) {
    this.router.navigate([`administrator/meals_by_ingredient`, ingredient.strIngredient]);
  }

  ngOnInit(): void {
    this.getIngredients();
  }

}
