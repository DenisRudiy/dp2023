import { Component } from '@angular/core';
import { TentServiceService } from '../services/tent-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  constructor(private service: TentServiceService) { }

  name: string = '';
  img: string = '';
  price: number = 0;
  rate: number = 0;
  description: string = '';

  getName(val: string) {
    console.warn(val)
    this.name = val
  }
  getImg(val: string) {
    console.warn(val)
    this.img = val
  }
  getPrice(f: NgForm) {
    this.price = parseInt(f.value.price)
  }
  getRate(w: NgForm) {
    this.rate = parseInt(w.value.rate)
  }
  getDescription(val: string) {
    console.warn(val)
    this.img = val
  }

  OnClick(): void {
    this.service.updatePost(this.name, this.img, this.price, this.rate, this.description);
  }

}
