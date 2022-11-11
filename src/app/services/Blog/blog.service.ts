import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = 'http://localhost:4000/'
  constructor(private http:HttpClient) { }

  insertBlog(data:any){
    console.log(data);
    return this.http.post(`${this.url}addBlog`,data)
  }

  fetchBlogs(){
    return this.http.get(`${this.url}blogsList`)
  }

  deleteBlogs(id:any){
    return this.http.delete(`${this.url}deleteBlog`)
  }

}
