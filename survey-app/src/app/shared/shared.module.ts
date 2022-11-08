import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './components/field/field.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    PageLayoutComponent,
    ButtonComponent,
    FieldComponent,
    TableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [PageLayoutComponent , ButtonComponent, FieldComponent, MaterialModule , TableComponent , MenuComponent]
})
export class SharedModule { }
