import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullpageadminComponent } from './fullpageadmin.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminProductComponent } from 'src/app/modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminProductFormComponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';


@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
