import { Component, OnInit } from '@angular/core';
import { TentEntity } from '../interfaces/tent-entity';
import { TentServiceService } from '../services/tent-service.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent {
  TentList:TentEntity[]=[];

  constructor(private service:TentServiceService){}

  ngOnInit(): void {
    this.service.getTentEntities().subscribe(
      (entities)=>{
        this.TentList=entities;
      }
    )
  }
}
