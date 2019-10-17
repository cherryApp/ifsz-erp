import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCardComponent } from './common/detail-card/detail-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductComponent } from './pages/product/product.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './common/nav/nav.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailCardComponent,
    FilterPipe,
    ProductComponent,
    IndexComponent,
    NavComponent,
    ProductEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
