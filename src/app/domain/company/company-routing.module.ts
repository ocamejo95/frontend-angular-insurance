import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Table1Component} from './table1/table1.component';
import {Table2Component} from './table2/table2.component';
import {Table5Component} from './table5/table5.component';
import {Table4Component} from './table4/table4.component';
import {Table3Component} from './table3/table3.component';

const routes: Routes = [
  {path: 'table-1', component: Table1Component},
  {path: 'table-2', component: Table2Component},
  {path: 'table-3', component: Table3Component},
  {path: 'table-4', component: Table4Component},
  {path: 'table-5', component: Table5Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {
}
