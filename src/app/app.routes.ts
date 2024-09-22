import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./log-in/log-in-routes.route')
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./products/features/product-shell/product.route')
  },
  {
    path: 'cart',
    loadChildren: ()=> import('./cart/cart.route')
  },
  {
    path: '**',
    redirectTo: ''
  },
];
