import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TentEntity } from '../interfaces/tent-entity';

@Injectable({
  providedIn: 'root'
})
export class TentServiceService {
  url:string = "http://localhost:8080/back-end/TentServlet";

  constructor(private http:HttpClient) { }

  getTentEntities():Observable<TentEntity[]>{
    return this.http.get<TentEntity[]>(this.url);
  }

  public updatePost(postName: Object, postImg: Object, postPrice: Object, postRate: Object, postDesc: Object) {
    this.http.put(this.url + "?name="+postName+"&img=assets/"+postImg+".png&price="+postPrice+"&rate="+postRate+"&description="+postDesc, postDesc).subscribe(data => {
      console.log(data);
    });
  }
}
