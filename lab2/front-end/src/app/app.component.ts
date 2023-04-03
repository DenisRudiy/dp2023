import { Component, Input, OnInit } from '@angular/core'
import * as SwaggerUI from 'swagger-ui-dist'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end'

  Logo: string =
    'https://i.pinimg.com/originals/1a/5b/80/1a5b80eeac9bd8ff05cd05207fc86b18.png'

  ngOnInit(): void {}
}
