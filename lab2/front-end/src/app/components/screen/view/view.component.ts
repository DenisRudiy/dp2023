import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  @Output() newItemEvent = new EventEmitter<string>()

  addNewItem(item: string) {
    this.newItemEvent.emit(item)
  }

  addItem(newItem: string) {
    this.addNewItem(newItem)
  }
}
