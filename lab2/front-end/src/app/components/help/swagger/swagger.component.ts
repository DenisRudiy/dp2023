import { Component, OnInit } from '@angular/core'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-bundle.js'

import 'swagger-ui-dist/swagger-ui.css'

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements OnInit {
  ngOnInit() {
    const ui = SwaggerUI({
      url: './assets/swagger.json',
      dom_id: '#swagger-ui'
    })
  }
}
