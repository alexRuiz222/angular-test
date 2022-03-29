import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from 'src/app/shared/services/meals.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  id: any;
  meal: any;
  sanitizer: DomSanitizer;
  constructor(private route: ActivatedRoute, private router: Router, private _MealsService: MealsService, sanitizer: DomSanitizer) { this.sanitizer = sanitizer; }
  getMeal() {
    this._MealsService.getMeal(this.id).subscribe((data: any) => {
      const { meals } = data;
      if (meals == null) this.router.navigate([`administrator/meals`]);
      this.meal = meals[0];
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

  videoURL(url: string) {
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getMeal();
    });
  }

}
