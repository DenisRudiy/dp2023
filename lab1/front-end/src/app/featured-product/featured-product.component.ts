import { Component, OnInit } from '@angular/core';
import { TentEntity } from '../interfaces/tent-entity';
import { TentServiceService } from '../services/tent-service.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {
  TentList:TentEntity[]=[];
  page = 1;

  constructor(private service:TentServiceService){}

  ngOnInit(): void {
    this.service.getTentEntities().subscribe(
      (entities)=>{
        this.TentList=entities;
        this.page = 1;
      }
    )
  }
  handlePageChange(event: number): void {
    this.page = event;
}

}
