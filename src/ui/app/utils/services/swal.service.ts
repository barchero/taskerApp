import {Injectable} from '@angular/core';
import swal, {SweetAlertOptions} from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  private staticParams = {
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-default'
  };

  constructor(private translateService: TranslateService) {}
  private translateField(value) {
    const [key, params] = value.match(/\; params:\{.*\:.*\}$/gm) ? value.split('; params:') : value.split();
    return this.translateService.instant(key, params ? JSON.parse(params) : null);
  }

  openSwal(params: SweetAlertOptions) {
    const localParams = Object.assign({}, params);
    const fieldsToTranslate = ['title', 'text', 'html', 'cancelButtonText', 'confirmButtonText', 'titleText'];
    for (const fieldToTranslate of fieldsToTranslate) {
      if (localParams[fieldToTranslate]) {
        localParams[fieldToTranslate] = this.translateField(localParams[fieldToTranslate]);
      }
    }
    return swal.fire(Object.assign({}, this.staticParams, localParams));
  }

}
