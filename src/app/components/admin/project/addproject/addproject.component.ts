import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  constructor(private Project:InsertBlogService, private router :Router) { }
  
  ngOnInit(): void {
  }

  addProject(data:any){
    this.Project.insertProject(data).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['adminIndex/projectsList'])
    })
    // console.warn(data);
    
  }

}
