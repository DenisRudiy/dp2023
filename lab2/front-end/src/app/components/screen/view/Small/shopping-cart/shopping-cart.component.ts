import { Component, Input } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(private shopService: ShopService) {}

  @Input() word = ''

  ngOnInit(): void {}
}
