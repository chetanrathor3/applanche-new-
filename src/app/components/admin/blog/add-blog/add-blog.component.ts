import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private blogServ:BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  insertoneBlog(data:any){
    // console.warn(data);
    this.blogServ.insertBlog(data).subscribe((data)=>{
     console.log(data);
    })
    this.router.navigate(['adminIndex/bloglist'])
  }

}
