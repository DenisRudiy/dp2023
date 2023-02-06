import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestInterface } from '../interfaces/test-interface';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  url:string = "http://localhost:8080/back-end/Servlet1";
  

  constructor(private http:HttpClient) { }

  getTestEntities():Observable<TestInterface[]>{
    return this.http.get<TestInterface[]>(
      this.url
    );
  }

  public updatePost(postTitle: Object, postAge: Object, postWidth: Object) {
    this.http.put(this.url + "?title="+postTitle+"&age="+postAge+"&width="+postWidth, postAge).subscribe(data => {
      console.log(data);
    });
  }
}
