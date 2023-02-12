import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TentEntity } from '../interfaces/tent-entity';

@Injectable({
  providedIn: 'root'
})
export class TentServiceService {
  list = new BehaviorSubject<TentEntity[]>([])
  url = "http://localhost:8080/back-end/TentServlet";

  constructor(private http: HttpClient) { }

  getTentEntities(): Observable<TentEntity[]> {
    return this.http.get<TentEntity[]>(this.url);
  }

  updateTent(user: TentEntity): Observable<TentEntity[]> {
    return this.http.put<TentEntity[]>(this.url + "/" + user.id, user);
  }

  postTent(user: TentEntity): Observable<TentEntity[]> {
    return this.http.post<TentEntity[]>(this.url, user);
  }

  deleteUser(user: TentEntity): Observable<TentEntity[]> {
    return this.http.delete<TentEntity[]>(this.url + "/" + user.id);
  }

  setList(list: TentEntity[]) {
    this.list.next(list);
  }
}
