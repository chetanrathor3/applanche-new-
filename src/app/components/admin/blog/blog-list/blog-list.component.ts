import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/Blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogServCon :any
  constructor(private blogServ : BlogService) { }

  ngOnInit(): void {
    this.blogServ.fetchBlogs().subscribe((data)=>{
      this.blogServCon = data;
      console.log(this.blogServCon);
      
    })
  }
  deleteBlog(id:any){
    this.blogServ.deleteBlogs(id).subscribe((data)=>{
      console.log(data);
      this.blogServ.fetchBlogs().subscribe((data)=>{
        this.blogServCon = data;
        console.log(this.blogServCon);
        
      })
      
    })
  }
}
