import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SelectItem } from 'primeng/api'
import { Subscription } from 'rxjs'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'
import { EditFormComponent } from '../../Small/edit-form/edit-form.component'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  clickEventSubscription!: Subscription

  guitars!: Guitar[]

  sortOptions!: SelectItem[]

  sortOrder!: number

  sortField!: string

  selectedGuitar?: Guitar

  constructor(private shopService: ShopService) {
    this.clickEventSubscription = this.shopService
      .getClickEvent()
      .subscribe(() => {
        this.updateGuitars()
      })
  }

  ngOnInit(): void {
    this.shopService.getGuitars().subscribe((guitar) => {
      this.guitars = guitar
    })
    this.sortOptions = [
      { label: 'High to Low', value: '!price' },
      { label: 'Low to High', value: 'price' }
    ]
  }

  updateGuitars() {
    this.shopService.getGuitars().subscribe((guitar) => {
      this.shopService.setList(guitar)
      this.guitars = guitar
    })
  }

  onSortChange(event: any) {
    let value = event.value

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1
      this.sortField = value.substring(1, value.length)
    } else {
      this.sortOrder = 1
      this.sortField = value
    }
  }

  onSelect(guitar: Guitar) {
    if (this.selectedGuitar && guitar.id == this.selectedGuitar.id) {
      this.selectedGuitar = undefined
    } else {
      this.selectedGuitar = guitar
    }
  }

  Click(value: any) {
    this.sortOrder = -1
    this.sortField = value.substring(1, value.length)
  }

  Click_2(value: any) {
    this.sortOrder = 1
    this.sortField = value
  }

  @Output() newItemEvent = new EventEmitter<Guitar>()
  addNewItem(guitar: Guitar) {
    this.newItemEvent.emit(guitar)
  }
}
