import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('remember');
    this.router.navigate([`login`]);
  }
  ngOnInit(): void {
  }

}
