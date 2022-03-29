import { Component, OnInit } from '@angular/core';
import { MealsService } from '../shared/services/meals.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RandomMealModalComponent } from '../shared/modals/random-meal-modal/random-meal-modal.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  meal: any;
  constructor(private _MealsService: MealsService, private modalService: NgbModal,) { }

  getRandomMeal() {
    this._MealsService.getRandomMeals().subscribe((data: any) => {
      const { meals } = data;
      this.meal = meals[0];
      this.openModal();
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

  openModal() {
    const modalRef = this.modalService.open(RandomMealModalComponent, { size: 'md' });
    modalRef.componentInstance.meal = this.meal;
    modalRef.result.then((r) => {
      // this.router.navigate([`administrator/product`, r._id]);
    }, (reason) => {
      // console.log(reason);
    });
  }

  ngOnInit(): void {
    this.getRandomMeal();
  }

}
