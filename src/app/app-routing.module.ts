import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';


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
    path: "products/:id",
    component: ProductEditComponent
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
