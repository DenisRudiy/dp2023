import { Component, OnInit } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'
import { MessageService } from 'primeng/api'
import { ShopComponent } from '../../Global/shop/shop.component'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  providers: [MessageService, ShopComponent]
})
export class EditFormComponent implements OnInit {
  guitars!: Guitar[]
  uploadedFiles: any[] = []
  new_guitar: Guitar = new Guitar()
  add = true
  selectedGuitar!: Guitar

  constructor(
    private shopService: ShopService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.shopService.getGuitars().subscribe((guitar) => {
      this.guitars = guitar
      if (guitar) {
        this.selectedGuitar = guitar[1]
      }
    })
  }

  onAdd() {
    this.shopService.createGuitar(this.new_guitar).subscribe((data) => {
      this.updateGuitars()
      this.shopService.sendClickEvent()
    })
  }

  onUpdate() {
    this.shopService.updateGuitar(this.selectedGuitar).subscribe((guitar) => {
      this.updateGuitars()
      this.shopService.sendClickEvent()
    })
  }

  onDelete(guitar: Guitar) {
    this.shopService.deleteGuitar(guitar).subscribe(() => {
      this.updateGuitars()
      this.shopService.sendClickEvent()
    })
  }

  onSelect(guitar: Guitar) {
    this.selectedGuitar = guitar
  }

  updateGuitars() {
    this.shopService.getGuitars().subscribe((guitar) => {
      this.shopService.setList(guitar)
      this.guitars = guitar
    })
  }

  showViaServiceAdd() {
    if (
      this.new_guitar.name == '' ||
      this.new_guitar.description == '' ||
      this.new_guitar.price == undefined ||
      this.new_guitar.rate == undefined ||
      this.new_guitar.photo == '' ||
      this.new_guitar.category == '' ||
      this.new_guitar.inventoryStatus == ''
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Wrong data of guitar'
      })
    } else {
      this.onAdd()
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Guitars has been added'
      })
    }
  }
  showViaServiceUpdate() {
    if (
      this.selectedGuitar.name == '' ||
      this.selectedGuitar.description == '' ||
      this.selectedGuitar.price == undefined ||
      this.selectedGuitar.rate == undefined ||
      this.selectedGuitar.photo == '' ||
      this.selectedGuitar.category == '' ||
      this.selectedGuitar.inventoryStatus == ''
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Wrong data of guitar'
      })
    } else {
      this.onUpdate()
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Guitars has been added'
      })
    }
  }
}
