import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ViewportScroller } from '@angular/common'
import { Guitar } from 'src/app/interfaces/guitar'
import { PrimeNGConfig } from 'primeng/api'
import { Router } from '@angular/router'

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

  @Output() show = new EventEmitter<boolean>()
  ShowForm(s: boolean) {
    this.show.emit(s)
  }

  @Output() del_item = new EventEmitter<Guitar>()
  Del_Item(item: Guitar) {
    this.del_item.emit(item)
  }

  onDel(item: Guitar) {
    this.Del_Item(item)
  }

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

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
      // {
      //   icon: 'pi pi-list',
      //   command: () => {}
      // },

      {
        icon: 'pi pi-plus-circle',
        command: () => {
          this.ShowForm(true)
        }
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
