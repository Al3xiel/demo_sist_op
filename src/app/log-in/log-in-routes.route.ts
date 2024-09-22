import {Routes} from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./log/log-in-page.component' )
  }
] as Routes
