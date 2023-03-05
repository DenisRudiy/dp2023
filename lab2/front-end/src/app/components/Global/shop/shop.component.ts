import { Component, OnInit } from '@angular/core'
import { SelectItem } from 'primeng/api'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'
//[(ngModel)]="sortKey"
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  guitars!: Guitar[]

  sortOptions!: SelectItem[]

  sortOrder!: number

  sortField!: string

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getGuitars().subscribe((data) => {
      this.guitars = data
    })
    this.sortOptions = [
      { label: 'High to Low', value: '!price' },
      { label: 'Low to High', value: 'price' }
    ]
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
}
