import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MealsService } from '../../services/meals.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-random-meal-modal',
  templateUrl: './random-meal-modal.component.html',
  styleUrls: ['./random-meal-modal.component.css']
})
export class RandomMealModalComponent implements OnInit {
  @Input() meal: any;
  constructor(private _MealsService: MealsService, public activeModal: NgbActiveModal, private router: Router) { }
  viewMeal() {
    this.activeModal.close();
    this.router.navigate([`administrator/meal`, this.meal.idMeal]);
  }
  ngOnInit(): void {
    console.log(this.meal);
  }

}
