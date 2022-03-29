import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from 'src/app/shared/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: any = [];
  mealsCarousel: any;
  txtSearch: string = '';
  searching: boolean = false;
  interval: any;
  constructor(private _MealsService: MealsService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) { }
  getMeals() {
    this._MealsService.getMeals(this.txtSearch).subscribe((data: any) => {
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


  search() {
    if (this.searching == false) {
      this.searching = true;
      setTimeout(() => { this.getMeals() }, 1000);
    }
  }

  getRandomMeals() {
    this.mealsCarousel = [];
    for (let x = 0; x < 5; x++) {
      this._MealsService.getRandomMeals().subscribe((data: any) => {
        const { meals } = data;
        this.mealsCarousel.push(meals[0]);
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
    this.ref.detectChanges();
  }


  viewMeal(meal: any) {
    this.router.navigate([`administrator/meal`, meal.idMeal]);
  }

  ngOnInit(): void {
    this.getRandomMeals();
    this.interval = setInterval(this.getRandomMeals, 300000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
