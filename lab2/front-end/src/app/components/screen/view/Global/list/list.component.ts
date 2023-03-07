import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ViewportScroller } from '@angular/common'
import { Guitar } from 'src/app/interfaces/guitar'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() guitar!: Guitar[]
  @Input() price!: number

  @Output() delete_guitars = new EventEmitter<Guitar[]>() // list -> screen
  DeleteGuitars(guitars: Guitar[]) {
    this.delete_guitars.emit(guitars)
  }

  // shopping-cart -> list
  OnDel(delete_guitars: Guitar[]) {
    this.DeleteGuitars(delete_guitars)
  }

  constructor(private viewportScroller: ViewportScroller) {}

  items!: MenuItem[]
  displayModal: any
  position!: string

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0])
  }
  toEnd() {
    this.viewportScroller.scrollToPosition([0, 2000])
  }
  showModalDialog(position: string) {
    this.position = position
    this.displayModal = true
  }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-home',
        command: () => {
          this.toTop()
        }
      },
      {
        icon: 'pi pi-list'
      },

      {
        icon: 'pi pi-plus-circle'
      },
      {
        icon: 'pi pi-github',
        command: () => {
          this.toEnd()
        }
      },
      {
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.showModalDialog('top')
        }
      }
    ]
  }
}
