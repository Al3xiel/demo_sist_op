import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss'
})
export default class LogInPageComponent {

}
