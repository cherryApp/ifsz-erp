import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/:id",
    component: ProductEditComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
