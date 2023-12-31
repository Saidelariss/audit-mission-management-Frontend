import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projectName: string = '';
  projectDescription: string = '';
  selectedClient: string = '';
  auditors: {id:string,name:string}[] = [{id:"1",name:"said"},{id:"2",name:"yassine"}]
  selectedAuditors : string[]=[];

  // Inject the Router service in the constructor
  constructor(private router: Router) {}

  // Function to create the project
  createProject() {
    // Perform the project creation logic here
    // You can use a service to communicate with your backend

    // Navigate to the project details page after creation
    // this.router.navigate(['/projects', projectId]); // Replace 'projectId' with the actual ID of the created project
  }

}
