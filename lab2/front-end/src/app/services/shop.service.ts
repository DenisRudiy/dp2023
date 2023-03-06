import { Injectable } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) {}

  Guitars_Url = 'http://localhost:3000/guitars'

  getGuitars() {
    return this.http.get<Guitar[]>(this.Guitars_Url)
  }
}
