import { Component, OnInit } from '@angular/core'
import { Guitar } from 'src/app/interfaces/guitar'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  guitars!: Guitar[]
  uploadedFiles: any[] = []

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getGuitars().subscribe((data) => {
      this.guitars = data
    })
  }
}
