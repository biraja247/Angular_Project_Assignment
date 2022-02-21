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

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

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

  ngOnInit(): void {
  }
  
  saveTask(){

  }

  cancel(){
    this.router.navigate(['/home/task']);
  }

}
