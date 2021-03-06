import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
import { PostsComponent } from './posts/posts.component';
import { FilterPipe } from './filter.pipe';
// import { CustomTextComponent } from './custom-text/custom-text.component';
import {CustomRoutingModule} from './custom-text/custom-routing.module';
import { ProductTabComponent } from './product-tab/product-tab.component';
import { AgGridModule } from 'ag-grid-angular';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    // ProductEditComponent,
    PostsComponent,
    FilterPipe,
    ProductTabComponent,
    NameEditorComponent,
    // CustomTextComponent
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: deprecation
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CustomRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'top-right',
        closeButton: true,
    } )],
  bootstrap: [AppComponent]
})
export class AppModule { }
