import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PhotoService } from 'src/app/services/photo-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  images!: any[]

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => (this.images = images))
  }
}
