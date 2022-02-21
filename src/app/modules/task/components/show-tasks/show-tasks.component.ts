import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  projectId: number;
  status: number;
  assignedTo: string;
  taskDetails: string;
  createdOn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, projectId: 1, status: 1, assignedTo: 'User1', taskDetails:'Task1', createdOn:'01-01-2022'},
  {id: 2, projectId: 2, status: 2, assignedTo: 'User2', taskDetails:'Task2', createdOn:'02-01-2022'},
  {id: 3, projectId: 3, status: 3, assignedTo: 'User3', taskDetails:'Task3', createdOn:'03-01-2022'},
  {id: 4, projectId: 4, status: 1, assignedTo: 'User4', taskDetails:'Task4', createdOn:'04-01-2022'},
  {id: 5, projectId: 5, status: 2, assignedTo: 'User5', taskDetails:'Task5', createdOn:'05-01-2022'},
  {id: 6, projectId: 6, status: 3, assignedTo: 'User1', taskDetails:'Task6', createdOn:'06-01-2022'},
];
@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  constructor(private router: Router) { }
  displayedColumns: string[] = ['id', 'projectId', 'status', 'assignedTo','taskDetails','createdOn'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

  addTask()
  {
    this.router.navigate(['/home/task/create']);
  }

  updateSelectedUserRows(position: any)
  {
    console.log(position);
    this.router.navigate(['/home/task/update/'+position]);
    

  }

}
