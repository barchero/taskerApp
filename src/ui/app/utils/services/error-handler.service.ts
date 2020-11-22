import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {SwalService} from '@ui/app/utils/services/swal.service';
import {SwalTypesEnum} from '@ui/model/enums/SwalTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
   constructor(private swalService: SwalService) { }

   throwError(err: HttpErrorResponse, errorType: SwalTypesEnum = SwalTypesEnum.ERROR) {
     this.swalService.openSwal({
       icon: errorType,
       text: err.error.errorMessage || 'common.error.general'
     });
   }
}
