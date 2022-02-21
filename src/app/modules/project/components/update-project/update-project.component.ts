import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateProject(){

  }

  cancel(){
    this.router.navigate(['/home/project']);
  }

}
