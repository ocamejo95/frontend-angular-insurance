import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  public list: any = [];

  constructor(private http: HttpClient,
              private router: Router,
              private toastrService: NbToastrService) { }

  sendFiles(data1: any, data2: any, data3: any) {
    const url = '/sherpa/Ambetter';
    const formularioDatos = new FormData();
    formularioDatos.append('companyBOB', data1);
    formularioDatos.append('companyComm', data2);
    formularioDatos.append('sherpa', data3);

    return this.http.post(`${environment.API_INTERNET}${url}`, formularioDatos).subscribe((response: any) => {
      this.list = response.message;
      this.toastrService.success('Upload Files Successfully!', 'Done!');
      this.router.navigate(['/pages/company/indicador-1']);
    });
  }
}
