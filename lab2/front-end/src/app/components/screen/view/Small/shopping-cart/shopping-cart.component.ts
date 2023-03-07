import { Component, Input } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { Output, EventEmitter } from '@angular/core'
import { Message, MessageService } from 'primeng/api'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [MessageService]
})
export class ShoppingCartComponent {
  constructor(private messageService: MessageService) {}

  @Input() guitar!: Guitar[]

  @Input() price!: number

  message!: Message[]

  @Output() delete_guitars = new EventEmitter<Guitar[]>()
  onBuy() {
    this.showViaService()
    this.delete_guitars.emit(this.guitar)
  }

  showViaService() {
    if (this.guitar.length != 0) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Thank you for buying our products :D'
      })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Your cart is empty'
      })
    }
  }
}
