import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface AssignedToUsers {
  value: string;
  viewValue: string;
}

interface ProjectTask{
  value: string;
  viewValue: string;
}

interface StatusList {
  value: string;
  viewValue: string;
} 
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private router: Router) { }

  assignedUsers: AssignedToUsers[] = [
    {value: 'U1', viewValue: 'User 1'},
    {value: 'U2', viewValue: 'User 2'},
    {value: 'U3', viewValue: 'User 3'},
  ];

  projectTasks: ProjectTask[] = [
    {value: 'P1', viewValue: 'Project 1'},
    {value: 'P2', viewValue: 'Project 2'},
    {value: 'P3', viewValue: 'Project 3'},
  ];

  statusList: StatusList[] = [
    {value: '1', viewValue: 'Progress'},
    {value: '2', viewValue: 'Finished'},
    {value: '2', viewValue: 'Delivered'},
  ];

  ngOnInit(): void {
  }

  updateTask(){

  }

  cancel(){
    this.router.navigate(['/home/task']);
  }
}
