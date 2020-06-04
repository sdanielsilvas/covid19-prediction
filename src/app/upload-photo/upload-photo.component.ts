import { Component, OnInit, ElementRef } from '@angular/core';
import { PhotoServicesService } from 'app/services/photo-services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {
  uploadForm: any;
  tagName: string;
  probability: string;
  email:any;

  constructor(
    private PhotoServicesService: PhotoServicesService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient

  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.PhotoServicesService.analizePhoto();
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    const headerDict = {
      'Content-Type': 'multipart/form-data',

      'Prediction-key': 'bcb0951c5e384f908fc07ab74ec13ee8',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    this.httpClient.post<any>("https://prognostic.cognitiveservices.azure.com/customvision/v3.0/Prediction/40be49b5-34aa-4f44-b279-662d435e96d6/classify/iterations/Iteration2/image", this.uploadForm.get('profile').value, {headers: { "Content-Type": 'application/octet-stream', 'Prediction-key': 'eeff77d8b057495ca69fe45ce04255e4'}}).subscribe(
      (res) => {
        console.log(res)
        this.tagName = res.predictions[0].tagName
        this.probability= res.predictions[0].probability
      },
      (err) => console.log(err)
    );
  }

}
