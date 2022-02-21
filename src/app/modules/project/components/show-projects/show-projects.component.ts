import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  projectName: string;
  id: number;
  projectDetails: string;
  createdOn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, projectName: 'WEAPON-X', projectDetails: 'P1 Details', createdOn: '01-01-2022'},
  {id: 2, projectName: 'WEAPON-I', projectDetails: 'P2 Details', createdOn: '02-01-2022'},
  {id: 3, projectName: 'WEAPON-II', projectDetails: 'P3 Details', createdOn: '03-01-2022'},
  {id: 4, projectName: 'WEAPON-III', projectDetails: 'P4 Details', createdOn: '04-01-2022'},
  {id: 5, projectName: 'WEAPON-IV', projectDetails: 'P5 Details', createdOn: '05-01-2022'},
  {id: 6, projectName: 'WEAPON-V', projectDetails: 'P6 Details', createdOn: '06-01-2022'},
  {id: 7, projectName: 'WEAPON-VI', projectDetails: 'P7 Details', createdOn: '07-01-2022'},
  {id: 8, projectName: 'WEAPON-VII', projectDetails: 'P8 Details', createdOn: '08-01-2022'},
  {id: 9, projectName: 'WEAPON-VIII', projectDetails: 'P9 Details', createdOn: '09-01-2022'},
];
@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  constructor(private router: Router) { }
  displayedColumns: string[] = ['id', 'projectName', 'projectDetails', 'createdOn'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

  addProject()
  {
    this.router.navigate(['/home/project/create']);
  }

  updateSelectedProjectRows(position: any)
  {
    console.log(position);
    this.router.navigate(['/home/project/update/'+position]);
    

  }

}
