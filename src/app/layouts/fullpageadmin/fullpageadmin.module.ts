import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullpageadminComponent } from './fullpageadmin.component';



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FullpageadminModule { }
