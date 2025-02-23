import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { LoginComponent } from './modules/login/login.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminProductComponent } from './modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product-update/admin-product-update.component';
import { AdminProductAddComponent } from './modules/admin/admin-product-add/admin-product-add.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductComponent},
      {path: 'products/:slug', component: ProductDetailsComponent},
    ]
  },
  {
    path:'', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent},
    ]
  },
  {
    path:'', component: FullpageadminComponent, children: [
      {path: 'admin', component: AdminComponent},
      {path: 'admin/products', component: AdminProductComponent},
      {path: 'admin/products/update/:id', component: AdminProductUpdateComponent},
      {path: 'admin/products/add', component: AdminProductAddComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
