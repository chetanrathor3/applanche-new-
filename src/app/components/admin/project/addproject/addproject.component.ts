import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { InsertBlogService } from 'src/app/services/insert-blog.service';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  constructor(private ProjectSer:ProjectService, private router :Router) { }
  addProjectForm = new FormGroup({
    projectImage:new FormControl([Validators.required]),
    projectTitle:new FormControl([Validators.required,Validators.maxLength(100)]),
    projectName:new FormControl([Validators.required,Validators.maxLength(100)]),
    projectCategory:new FormControl([Validators.required,Validators.maxLength(100)]),
    projectDescription:new FormControl([Validators.required,Validators.maxLength(1000)]),

  })
  ngOnInit(): void {
  }

  addProject(){
    // this.ProjectSer.insertProject(data).subscribe((data)=>{
      console.log(this.addProject);
      // this.router.navigate(['adminIndex/projectsList'])
    // })
    // console.warn(data);
    
  }

}
