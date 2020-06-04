import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoServicesService {

  constructor(
    private http: HttpClient
  ) { }

  analizePhoto(): any {
    const formData = new FormData();
    //formData.append('file', this.uploadForm.get('profile').value);
    //console.log("llamo el servicio");
    //return this.http.get<any>("https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/d667852f-526a-4bd0-8b6b-2137149d96b8/classify/iterations/radio/image[?application]")
  }
}
