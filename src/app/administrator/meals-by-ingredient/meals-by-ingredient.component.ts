import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/shared/services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meals-by-ingredient',
  templateUrl: './meals-by-ingredient.component.html',
  styleUrls: ['./meals-by-ingredient.component.css']
})
export class MealsByIngredientComponent implements OnInit {

  meals: any;
  ingredient: any;
  constructor(private _MealsService: MealsService, private route: ActivatedRoute, private router: Router,) { }
  getMealsByingredient() {
    this._MealsService.getMealsByingredient(this.ingredient).subscribe((data: any) => {
      ({ meals: this.meals } = data);
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

  viewMeal(meal: any) {
    this.router.navigate([`administrator/meal`, meal.idMeal]);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredient = params['ingredient'];
      this.getMealsByingredient();
    });
  }

}
