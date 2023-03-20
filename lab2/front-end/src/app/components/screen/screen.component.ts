import { Component, Input } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  Visible = false
  list: Guitar[] = []
  price = 0
  new: Guitar[] = []

  newList(guitars: Guitar[]) {
    this.new = guitars
  }

  addItem(guitar: Guitar) {
    let add = true
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == guitar.id) {
        add = false
      }
    }
    if (add == true) {
      this.list.push(guitar)
      this.price += guitar.price
    }
  }

  DeleteGuitars(delete_guitars: Guitar[]) {
    for (let i = 0; i < delete_guitars.length; i++) {
      this.list.splice(i)
      this.price = 0
    }
  }

  ShowForm(s: boolean) {
    this.Visible = s
  }

  Del_Item(item: Guitar) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == item.id) {
        this.list.splice(i, 1)
        this.price = this.price - item.price
      }
    }
  }
}
