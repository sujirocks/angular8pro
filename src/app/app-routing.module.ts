import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductGetComponent} from './product-get/product-get.component';
import { ProductTabComponent } from './product-tab/product-tab.component';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {
    path: 'products/custom',
    loadChildren: () => import('./custom-text/custom-routing.module').then(m => m.CustomRoutingModule)
  },
  {
    path: 'products/create',
    component: ProductAddComponent
  },
  {
    path: 'products/posts',
    component: PostsComponent
  },
  {
    path: 'products/edit',
    component: ProductEditComponent
  },
  {
    path: 'products/tab',
    component: ProductTabComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
