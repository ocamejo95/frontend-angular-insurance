import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UploadFilesService} from '../services/upload-files.service';

@Component({
  selector: 'ngx-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {
  public cantMony: number;
  settings = {

    actions: false,
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      commissionDate: {
        title: 'CommissionDate',
        type: 'string',
      },
      policyNumber: {
        title: 'PolicyNumber',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'string',
      },
      ifPay: {
        title: 'IfPay',
        type: 'boolean',
      },
    },
    pager: {display: true, perPage: 15},
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.source = this.uploadFilesService.list.clientsOnlyCS;
    this.cantMony = this.uploadFilesService.list.cantMony;
  }

}
