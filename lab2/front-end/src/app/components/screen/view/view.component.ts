import { Component, EventEmitter, Output } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  @Output() newItemEvent = new EventEmitter<Guitar>()

  addNewItem(guitar: Guitar) {
    this.newItemEvent.emit(guitar)
  }

  addItem(guitar: Guitar) {
    this.addNewItem(guitar)
  }
}
