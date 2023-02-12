import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TentServiceService } from '../services/tent-service.service';
import { NgForm } from '@angular/forms';
import { TentEntity } from '../interfaces/tent-entity';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  
  @Input() tent?: TentEntity
  @Output() updated: EventEmitter<null> = new EventEmitter();

  constructor(private service: TentServiceService) { }

  ngOnInit(): void {
    
  }

  Btn_Click() {
    if (this.tent) {
      this.service.updateTent(this.tent).subscribe(
        () => {
          this.updated.emit();
        }
      )
    }
  }

  deleteTent(tent: TentEntity) {
    this.service.deleteUser(tent).subscribe(
      () => {
        this.updateTents();
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
}
