import { Component, Input, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() word = ''

  items!: MenuItem[]
  displayModal: any
  position!: string

  constructor(private viewportScroller: ViewportScroller) {}

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
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.showModalDialog('top')
        }
      },
      {
        icon: 'pi pi-github',
        command: () => {
          this.toEnd()
        }
      },
      {
        icon: 'pi pi-plus-circle'
      }
    ]
  }

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
}
