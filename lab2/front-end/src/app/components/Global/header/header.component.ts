import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayModal: any
  position!: string

  showModalDialog(position: string) {
    this.position = position
    this.displayModal = true
  }
}
