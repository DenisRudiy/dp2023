import { Component } from '@angular/core';
import { Entity } from './interfaces/entity';
import { ImgEntity } from './interfaces/entity_img';
import { Service1Service } from './services/service1.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-Lab_1';

  entityList:Entity[]=[];
  entityImgList:ImgEntity[]=[];

  constructor(private service:Service1Service){}

  getEntities():void{
    this.service.getEntities().subscribe(
      (entities)=>{
        this.entityList=entities;
      }
    )
  }
  getEntitiesImg():void{
    this.service.getEntitiesImg().subscribe(
      (entities)=>{
        this.entityImgList=entities;
      }
    )
  }
}
