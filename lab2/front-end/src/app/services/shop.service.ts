import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Guitar } from '../interfaces/guitar'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  get_url: string = 'http://localhost:2828/back-end/api/guitar_entity/retrieve'
  post_url: string = 'http://localhost:2828/back-end/api/guitar_entity/create'

  constructor(private http: HttpClient) {}

  getGuitars(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this.get_url)
  }

  createGuitar(guitar: Guitar): Observable<any> {
    return this.http.post(this.post_url, guitar)
  }
}
