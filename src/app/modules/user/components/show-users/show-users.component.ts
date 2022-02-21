import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  firstName: string;
  id: number;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstName: 'Tony', lastName: 'Stark', email: 'a@gmail.com'},
  {id: 2, firstName: 'Dr', lastName: 'Strange', email: 'b@gmail.com'},
  {id: 3, firstName: 'Steve', lastName: 'Rogers', email: 'c@gmail.com'},
  {id: 4, firstName: 'Clint', lastName: 'Barton', email: 'd@gmail.com'},
  {id: 5, firstName: 'Wanda', lastName: 'Maximof', email: 'e@gmail.com'},
  {id: 6, firstName: 'Natasha', lastName: 'Romanoff', email: 'f@gmail.com'},
];

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private router: Router) { }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

  addUser()
  {
    this.router.navigate(['/home/user/create']);
  }

  updateSelectedUserRows(position: any)
  {
    console.log(position);
    this.router.navigate(['/home/user/update/'+position]);
    

  }

}
