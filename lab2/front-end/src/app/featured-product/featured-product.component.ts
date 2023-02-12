import { Component, Inject, OnInit } from '@angular/core';
import { TentEntity } from '../interfaces/tent-entity';
import { TentServiceService } from '../services/tent-service.service';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {
  TentList:TentEntity[]=[];
  selectedTent?: TentEntity;

  constructor(
    private service:TentServiceService,
    ){}

    ngOnInit(): void {
      this.updateTents();
      this.service.list.subscribe(
        (list: TentEntity[]) => { this.TentList = list }
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
}
