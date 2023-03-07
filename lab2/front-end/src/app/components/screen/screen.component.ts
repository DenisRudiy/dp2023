import { Component, Input } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  item: Guitar[] = []
  price = 0

  addItem(guitar: Guitar) {
    let add = true
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i].id == guitar.id) {
        add = false
      }
    }
    if (add == true) {
      this.item.push(guitar)
      this.price += guitar.price
    }
  }

  DeleteGuitars(delete_guitars: Guitar[]) {
    for (let i = 0; i < delete_guitars.length; i++) {
      this.item.splice(i)
      this.price = 0
    }
  }
}
