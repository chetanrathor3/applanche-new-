import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styleUrls: ['./projectslist.component.css']
})
export class ProjectslistComponent implements OnInit {
projectsSerCon : any
projectsSerCon2 : any

  constructor(private projectSer : ProjectService) { }

  ngOnInit(): void {
    this.projectSer.fetchProjects().subscribe((data)=>{
      // console.log(data);
      this.projectsSerCon = data
      console.log(this.projectsSerCon);
      
      this.projectsSerCon2 = data
      
    })
  }
  deletProjectFun(id:any){
    // console.warn(id);
    
    this.projectSer.deleteProject(id).subscribe((data)=>{
    console.warn(data);
    this.projectSer.fetchProjects().subscribe((data)=>{
      // console.log(data);
      this.projectsSerCon = data
      
    })
    
    })
   
  }

}
