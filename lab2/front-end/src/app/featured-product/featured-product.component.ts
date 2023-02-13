import { Component, OnInit } from '@angular/core';
import { TentEntity } from '../interfaces/tent-entity';
import { TentServiceService } from '../services/tent-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit{
  TentList: TentEntity[] = [];
  TentBuyList: TentEntity[] = [];
  selectedTent?: TentEntity;
  showCart: boolean = false;
  buyTent?: TentEntity;
  GlobalCount: number = 0;
  count: number = 0;
  


  getCount(c: NgForm) {
    this.count = parseInt(c.value.count)
    console.log(this.count)
  }

  constructor(
    private service: TentServiceService,
  ) { }

  ngOnInit(): void {
    this.updateTents();
    this.service.list.subscribe(
      (list: TentEntity[]) => {
        this.TentList = list
      }
    );
  }

  updateTents() {
    this.service.getTentEntities().subscribe(
      (tents) => {
        this.service.setList(tents);
      }
    );
  }

  addTent(user: TentEntity) {
    this.service.postTent(user).subscribe(
      (tent) => {
        this.updateTents();
      }
    )
  }

  onSelect(tent: TentEntity) {
    if (this.selectedTent && tent.id == this.selectedTent.id) {
      this.selectedTent = undefined;
    }
    else {
      this.selectedTent = tent;
    }
  }

  onBuy(tent: TentEntity) {
    for (let i = 0; i < this.TentBuyList.length; i++) {
      if (this.TentBuyList[i] == tent){
        return 
      }
    }
    if (this.buyTent && tent.id == this.buyTent.id) {
      this.buyTent = undefined;
    }
    else {
      this.buyTent = tent;
      this.TentBuyList.push(this.buyTent);
    }
  }
}


