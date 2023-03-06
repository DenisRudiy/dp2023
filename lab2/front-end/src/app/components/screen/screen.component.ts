import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  word = ''

  addItem(newItem: string) {
    this.word = newItem
  }
}
