import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../interfaces/entity';
import { ImgEntity } from '../interfaces/entity_img';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url:string = "http://localhost:8080/back-end/Servlet1";
  img:string = "http://localhost:8080/back-end/ImgServlet";

  constructor(private http:HttpClient) { }

  getEntities():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.url);
  }
  getEntitiesImg():Observable<ImgEntity[]>{
    return this.http.get<ImgEntity[]>(this.img);
  }
}
