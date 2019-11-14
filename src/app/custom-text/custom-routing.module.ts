import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomTextComponent } from './custom-text.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
const routes: Routes = [{
  path: '',
  component: CustomTextComponent
}];

@NgModule({
  declarations: [CustomTextComponent, ProductEditComponent],
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
