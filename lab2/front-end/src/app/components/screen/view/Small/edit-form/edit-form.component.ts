import { Component, OnInit } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'
import { MessageService } from 'primeng/api'
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  providers: [MessageService]
})
export class EditFormComponent implements OnInit {
  guitars!: Guitar[]
  uploadedFiles: any[] = []
  new_guitar: Guitar = new Guitar()
  add = true

  constructor(
    private shopService: ShopService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.shopService.getGuitars().subscribe((guitar) => {
      this.guitars = guitar
    })
  }

  @Output() new = new EventEmitter<Guitar[]>()
  newList(g_list: Guitar[]) {
    this.new.emit(g_list)
  }

  onAdd() {
    this.shopService.createGuitar(this.new_guitar).subscribe((data) => {})
    this.guitars.push(this.new_guitar)
    console.log(this.guitars)
    this.newList(this.guitars)
  }

  showViaService() {
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
}
