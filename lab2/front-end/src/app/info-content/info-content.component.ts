import { Component, OnInit } from '@angular/core';
import { TentEntity } from '../interfaces/tent-entity';
import { TentServiceService } from '../services/tent-service.service';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss']
})
export class InfoContentComponent {
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
