import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { Guitar } from '../interfaces/guitar'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  list = new BehaviorSubject<Guitar[]>([])
  private subject = new Subject<any>()

  get_url: string = 'http://localhost:2828/back-end/api/guitar_entity/retrieve'
  post_url: string = 'http://localhost:2828/back-end/api/guitar_entity/create'
  put_url: string = 'http://localhost:2828/back-end/api/guitar_entity/update'
  del_url: string = 'http://localhost:2828/back-end/api/guitar_entity/delete'

  constructor(private http: HttpClient) {}

  getGuitars(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this.get_url)
  }

  createGuitar(guitar: Guitar): Observable<any> {
    return this.http.post(this.post_url, guitar)
  }

  updateGuitar(guitar: Guitar): Observable<Object> {
    return this.http.put(`${this.put_url}/${guitar.id}`, guitar)
  }

  deleteGuitar(guitar: Guitar): Observable<Guitar[]> {
    return this.http.delete<Guitar[]>(this.del_url + '/' + guitar.id)
  }

  setList(guitar: Guitar[]) {
    this.list.next(guitar)
  }

  sendClickEvent() {
    this.subject.next(1)
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable()
  }
}
