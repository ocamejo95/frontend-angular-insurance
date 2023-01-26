import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { Table5Component } from './table5/table5.component';
import {NbCardModule} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  declarations: [
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class CompanyModule { }
