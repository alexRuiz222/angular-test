import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMealModalComponent } from './random-meal-modal.component';

describe('RandomMealModalComponent', () => {
  let component: RandomMealModalComponent;
  let fixture: ComponentFixture<RandomMealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomMealModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
