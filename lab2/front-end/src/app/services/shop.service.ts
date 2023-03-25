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

  url: string = 'http://localhost:2828/api/guitars'

  constructor(private http: HttpClient) {}

  getGuitars(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this.url + '/retrieve')
  }

  createGuitar(guitar: Guitar): Observable<any> {
    return this.http.post(this.url + '/create', guitar)
  }

  updateGuitar(guitar: Guitar): Observable<Object> {
    return this.http.put(`${this.url + '/update'}/${guitar.id}`, guitar)
  }

  deleteGuitar(guitar: Guitar): Observable<Guitar[]> {
    return this.http.delete<Guitar[]>(this.url + '/delete/' + guitar.id)
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
