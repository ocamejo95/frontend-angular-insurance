import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UploadFilesService} from '../services/upload-files.service';

@Component({
  selector: 'ngx-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.scss'],
})
export class Table4Component implements OnInit {
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
        type: 'string',
      },
    },
    pager: {display: true, perPage: 15},
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.source = this.uploadFilesService.list.informClientsCSgood;
    this.cantMony = this.uploadFilesService.list.cantMony;
  }

}
