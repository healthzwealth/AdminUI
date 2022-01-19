import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerModule } from '../../pager/pager.module';
import { ClrIconModule } from '@clr/angular';
import { ClarityModule } from '@clr/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { TabsComponent } from './tabs.component';
import { FormsModule } from '@angular/forms';

import { CardTemplateComponent } from './cardTemplate/cardTemplate.component';

@NgModule({
  declarations: [
     TabsComponent,
      CardTemplateComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    PagerModule,
    ClrIconModule,
    ClarityModule,
    FormsModule
  ]
})
export class AdminModule  { }